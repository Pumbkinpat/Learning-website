import React from 'react';
import { ROADMAP } from '../constants';
import { cn } from '../lib/utils';
import { Lock, CheckCircle, ChevronRight, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  currentModuleId: string;
  completedDsaModuleIds: string[];
  completedProjectModuleIds: string[];
  onSelectModule: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentModuleId,
  completedDsaModuleIds = [],
  completedProjectModuleIds = [],
  onSelectModule,
}) => {
  return (
    <aside className="w-80 h-screen bg-slate-900 text-slate-100 flex flex-col border-r border-slate-800 overflow-y-auto">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="p-2 bg-red-600 rounded-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">NAB LMS</h1>
          <p className="text-xs text-slate-400">Java Mastery Path</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-8">
        {ROADMAP.map((level) => (
          <div key={level.id} className="space-y-3">
            <div className="px-2">
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {level.name}: {level.title}
              </h2>
              <p className="text-[10px] text-slate-400 italic mt-1">{level.goal}</p>
            </div>

            <div className="space-y-1">
              {level.modules.map((module, index) => {
                const isCompleted = completedProjectModuleIds.includes(module.id);
                const isActive = currentModuleId === module.id;
                
                // Logic for locking:
                // A module is locked if it's not the first one AND the previous one's Project isn't completed.
                const flatModules = ROADMAP.flatMap(l => l.modules);
                const moduleIndex = flatModules.findIndex(m => m.id === module.id);
                const isLocked = moduleIndex > 0 && !completedProjectModuleIds.includes(flatModules[moduleIndex - 1].id);

                return (
                  <button
                    key={module.id}
                    disabled={isLocked}
                    onClick={() => onSelectModule(module.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left group",
                      isActive ? "bg-red-600/10 text-red-500 border border-red-600/20" : "hover:bg-slate-800 text-slate-400",
                      isLocked && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : isLocked ? (
                        <Lock className="w-4 h-4" />
                      ) : (
                        <div className={cn(
                          "w-4 h-4 rounded-full border-2",
                          isActive ? "border-red-500" : "border-slate-600"
                        )} />
                      )}
                    </div>
                    <span className="text-sm font-medium flex-1 truncate">
                      {module.title}
                    </span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>Overall Progress</span>
          <span>{Math.round((completedProjectModuleIds.length / ROADMAP.flatMap(l => l.modules).length) * 100)}%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(completedProjectModuleIds.length / ROADMAP.flatMap(l => l.modules).length) * 100}%` }}
            className="h-full bg-red-600"
          />
        </div>
      </div>
    </aside>
  );
};
