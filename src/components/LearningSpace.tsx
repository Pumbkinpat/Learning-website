import React from 'react';
import { CodeEditor } from './CodeEditor';
import { AIReviewPanel } from './AIReviewPanel';
import { Module } from '../types';
import { Documentation } from './Documentation';
import { Play, BookOpen, Code2, LayoutDashboard, Info, Braces, FileText, ExternalLink, GraduationCap, Lock, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { cn } from '../lib/utils';

interface LearningSpaceProps {
  module: Module;
  code: string;
  onCodeChange: (code: string) => void;
  onReview: () => void;
  review: any;
  isReviewing: boolean;
  activeTab: 'lesson' | 'editor' | 'project' | 'docs';
  setActiveTab: (tab: 'lesson' | 'editor' | 'project' | 'docs') => void;
  selectedLevel: 'easy' | 'medium' | 'hard';
  onSelectLevel: (level: 'easy' | 'medium' | 'hard') => void;
  isDsaPassed: boolean;
}

export const LearningSpace: React.FC<LearningSpaceProps> = ({
  module,
  code,
  onCodeChange,
  onReview,
  review,
  isReviewing,
  activeTab,
  setActiveTab,
  selectedLevel,
  onSelectLevel,
  isDsaPassed,
}) => {
  const currentTasks = activeTab === 'editor' ? module.dsaTasks : module.projectTasks;
  const currentTask = currentTasks.find(t => t.level === selectedLevel) || currentTasks[0];

  return (
    <div className="flex-1 flex flex-col h-screen bg-slate-950">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <h2 className="text-slate-100 font-bold">{module.title}</h2>
          <div className="flex bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('lesson')}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-2",
                activeTab === 'lesson' ? "bg-slate-700 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"
              )}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Lesson
            </button>
            <button
              onClick={() => setActiveTab('editor')}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-2",
                activeTab === 'editor' ? "bg-slate-700 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"
              )}
            >
              <Code2 className="w-3.5 h-3.5" />
              DSA Task
            </button>
            <button
              onClick={() => isDsaPassed && setActiveTab('project')}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-2",
                activeTab === 'project' ? "bg-slate-700 text-white shadow-sm" : "text-slate-400 hover:text-slate-200",
                !isDsaPassed && "opacity-50 cursor-not-allowed"
              )}
            >
              {isDsaPassed ? <LayoutDashboard className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              Project
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-2",
                activeTab === 'docs' ? "bg-slate-700 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"
              )}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Document
            </button>
          </div>
        </div>

        <button
          onClick={onReview}
          disabled={isReviewing || activeTab === 'lesson'}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-red-600/20"
        >
          {isReviewing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          Submit for Review
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          {activeTab === 'lesson' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl mx-auto w-full space-y-8 pb-20"
            >
              <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <BookOpen className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Lesson Content</h3>
                </div>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                    <Markdown 
                      components={{
                        p: ({children}) => <p className="mb-4 last:mb-0">{children}</p>,
                        code: ({children}) => <code className="text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded font-mono text-sm">{children}</code>,
                        pre: ({children}) => <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 my-4 overflow-x-auto">{children}</pre>,
                        h1: ({children}) => <h1 className="text-2xl font-bold mb-4 text-white">{children}</h1>,
                        h2: ({children}) => <h2 className="text-xl font-bold mb-3 text-white">{children}</h2>,
                        ul: ({children}) => <ul className="list-disc pl-5 space-y-2 mb-4">{children}</ul>,
                      }}
                    >
                      {module.content}
                    </Markdown>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 hover:border-red-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-red-500 font-bold">
                    <Code2 className="w-5 h-5" />
                    DSA Challenge (Medium)
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {module.dsaTasks.find(t => t.level === 'medium')?.description}
                  </p>
                  {module.dsaTasks.find(t => t.level === 'medium')?.example && (
                    <div className="mt-2 p-2 bg-slate-950 rounded border border-slate-800">
                      <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Example</p>
                      <code className="text-xs text-red-400">
                        {module.dsaTasks.find(t => t.level === 'medium')?.example}
                      </code>
                    </div>
                  )}
                </div>
                <div className={cn(
                  "p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 transition-colors relative overflow-hidden",
                  isDsaPassed ? "hover:border-blue-500/30" : "opacity-50"
                )}>
                  {!isDsaPassed && (
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center z-10">
                      <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 shadow-xl">
                        <Lock className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Locked</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-blue-500 font-bold">
                    <LayoutDashboard className="w-5 h-5" />
                    Project Task (Medium)
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {module.projectTasks.find(t => t.level === 'medium')?.description}
                  </p>
                  {module.projectTasks.find(t => t.level === 'medium')?.example && (
                    <div className="mt-2 p-2 bg-slate-950 rounded border border-slate-800">
                      <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Example</p>
                      <code className="text-xs text-blue-400">
                        {module.projectTasks.find(t => t.level === 'medium')?.example}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'docs' && <Documentation />}

          {(activeTab === 'editor' || activeTab === 'project') && (
            <div className="flex-1 flex flex-col space-y-4 h-full overflow-hidden">
              {/* Pass Notification */}
              {activeTab === 'editor' && isDsaPassed && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 p-3 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-500 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-green-500">Pass DSA!</p>
                      <p className="text-xs text-green-500/70">You can now move to the Project task.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveTab('project')}
                    className="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Go to Project
                  </button>
                </motion.div>
              )}

              {/* Task Description Panel in Editor */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {activeTab === 'editor' ? (
                      <Code2 className="w-4 h-4 text-red-500" />
                    ) : (
                      <LayoutDashboard className="w-4 h-4 text-blue-500" />
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Current Task: {activeTab === 'editor' ? 'DSA Challenge' : 'Project Task'}
                    </span>
                  </div>

                  <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
                    {(['easy', 'medium', 'hard'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => onSelectLevel(lvl)}
                        className={cn(
                          "px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded-md transition-all",
                          selectedLevel === lvl 
                            ? (lvl === 'easy' ? "bg-emerald-500 text-white" : lvl === 'medium' ? "bg-amber-500 text-white" : "bg-red-500 text-white")
                            : "text-slate-500 hover:text-slate-300"
                        )}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-slate-400 italic">
                    {currentTask.description}
                  </p>
                  {currentTask.example && (
                    <div className="p-2 bg-slate-950 rounded border border-slate-800 inline-block">
                      <span className="text-[10px] uppercase text-slate-500 font-bold mr-2">Example:</span>
                      <code className={cn(
                        "text-xs",
                        activeTab === 'editor' ? "text-red-400" : "text-blue-400"
                      )}>
                        {currentTask.example}
                      </code>
                    </div>
                  )}
                </div>

                {selectedLevel === 'medium' && (
                  <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500/80 bg-amber-500/5 border border-amber-500/10 px-3 py-1.5 rounded-lg">
                    <Info className="w-3 h-3" />
                    <span>PASS CRITERIA: Pass Medium level with score {'>'} 85% to complete module task.</span>
                  </div>
                )}
              </motion.div>

              {/* Detailed Project Info */}
              {activeTab === 'project' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {module.projectExplanation && (
                    <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2 text-blue-500 font-bold text-[10px] uppercase tracking-wider">
                        <Info className="w-3.5 h-3.5" />
                        Giải thích
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{module.projectExplanation}</p>
                    </div>
                  )}
                  {module.projectVariableTypes && (
                    <div className="bg-purple-500/5 border border-purple-500/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2 text-purple-500 font-bold text-[10px] uppercase tracking-wider">
                        <Braces className="w-3.5 h-3.5" />
                        Kiểu biến
                      </div>
                      <div className="text-xs text-slate-400 whitespace-pre-line leading-relaxed">{module.projectVariableTypes}</div>
                    </div>
                  )}
                  {module.projectRules && (
                    <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2 text-amber-500 font-bold text-[10px] uppercase tracking-wider">
                        <FileText className="w-3.5 h-3.5" />
                        Quy tắc
                      </div>
                      <div className="text-xs text-slate-400 whitespace-pre-line leading-relaxed">{module.projectRules}</div>
                    </div>
                  )}
                  {module.projectDocs && module.projectDocs.length > 0 && (
                    <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2 text-emerald-500 font-bold text-[10px] uppercase tracking-wider">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Tài liệu đọc thêm
                      </div>
                      <ul className="space-y-2">
                        {module.projectDocs.map((doc, i) => (
                          <li key={i}>
                            <a 
                              href={doc} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 group"
                            >
                              <span className="truncate">{new URL(doc).hostname}</span>
                              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}

              <div className="flex-1 flex flex-col min-h-0">
                <CodeEditor 
                  code={code} 
                  onChange={(val) => onCodeChange(val || '')} 
                />
              </div>
            </div>
          )}
        </div>

        <AIReviewPanel review={review} isReviewing={isReviewing} />
      </div>
    </div>
  );
};
