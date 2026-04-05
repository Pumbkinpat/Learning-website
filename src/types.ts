export type TaskLevel = 'easy' | 'medium' | 'hard';

export interface Task {
  level: TaskLevel;
  description: string;
  example?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
  dsaTasks: Task[];
  projectTasks: Task[];
  projectExplanation?: string;
  projectVariableTypes?: string;
  projectRules?: string;
  projectDocs?: string[];
  isLocked: boolean;
  isCompleted: boolean;
}

export interface Level {
  id: number;
  name: string;
  title: string;
  goal: string;
  modules: Module[];
}

export interface UserProgress {
  completedDsaModuleIds: string[];
  completedProjectModuleIds: string[];
  currentModuleId: string;
  projectCode: Record<string, string>;
}
