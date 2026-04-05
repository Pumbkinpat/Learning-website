import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { LearningSpace } from './components/LearningSpace';
import { ROADMAP } from './constants';
import { UserProgress } from './types';
import { reviewCode } from './services/gemini';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('nab-lms-progress');
    const defaultState = {
      completedDsaModuleIds: [],
      completedProjectModuleIds: [],
      currentModuleId: ROADMAP[0].modules[0].id,
      projectCode: {}
    };
    
    if (!saved) return defaultState;
    
    try {
      const parsed = JSON.parse(saved);
      return {
        ...defaultState,
        ...parsed,
        completedDsaModuleIds: parsed.completedDsaModuleIds || [],
        completedProjectModuleIds: parsed.completedProjectModuleIds || [],
      };
    } catch (e) {
      return defaultState;
    }
  });

  const [currentCode, setCurrentCode] = useState('');
  const [isReviewing, setIsReviewing] = useState(false);
  const [currentReview, setCurrentReview] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'lesson' | 'editor' | 'project' | 'docs'>('lesson');
  const [selectedLevel, setSelectedLevel] = useState<'easy' | 'medium' | 'hard'>('medium');

  const currentModule = ROADMAP.flatMap(l => l.modules).find(m => m.id === progress.currentModuleId)!;

  useEffect(() => {
    localStorage.setItem('nab-lms-progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    // Load code for current module/tab/level
    const key = `${progress.currentModuleId}-${activeTab}-${selectedLevel}`;
    setCurrentCode(progress.projectCode[key] || '');
    setCurrentReview(null);
  }, [progress.currentModuleId, activeTab, selectedLevel]);

  const handleCodeChange = (newCode: string) => {
    setCurrentCode(newCode);
    setProgress(prev => ({
      ...prev,
      projectCode: {
        ...prev.projectCode,
        [`${prev.currentModuleId}-${activeTab}-${selectedLevel}`]: newCode
      }
    }));
  };

  const handleReview = async () => {
    setIsReviewing(true);
    const tasks = activeTab === 'editor' ? currentModule.dsaTasks : currentModule.projectTasks;
    const task = tasks.find(t => t.level === selectedLevel)!;
    
    const result = await reviewCode(currentCode, task.description);
    setCurrentReview(result);
    setIsReviewing(false);

    // Pass criteria: level medium + score > 85%
    if (result.isPassed && selectedLevel === 'medium' && result.score > 85) {
      if (activeTab === 'editor' && !progress.completedDsaModuleIds.includes(currentModule.id)) {
        setProgress(prev => ({
          ...prev,
          completedDsaModuleIds: [...prev.completedDsaModuleIds, currentModule.id]
        }));
      } else if (activeTab === 'project' && !progress.completedProjectModuleIds.includes(currentModule.id)) {
        setProgress(prev => ({
          ...prev,
          completedProjectModuleIds: [...prev.completedProjectModuleIds, currentModule.id]
        }));
      }
    }
  };

  const handleSelectModule = (id: string) => {
    setProgress(prev => ({ ...prev, currentModuleId: id }));
    setActiveTab('lesson');
  };

  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden">
      <Sidebar 
        currentModuleId={progress.currentModuleId}
        completedDsaModuleIds={progress.completedDsaModuleIds}
        completedProjectModuleIds={progress.completedProjectModuleIds}
        onSelectModule={handleSelectModule}
      />
      <LearningSpace 
        module={currentModule}
        code={currentCode}
        onCodeChange={handleCodeChange}
        onReview={handleReview}
        review={currentReview}
        isReviewing={isReviewing}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedLevel={selectedLevel}
        onSelectLevel={setSelectedLevel}
        isDsaPassed={progress.completedDsaModuleIds.includes(currentModule.id)}
      />
    </div>
  );
}
