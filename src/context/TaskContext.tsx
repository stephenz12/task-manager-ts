import { createContext, useContext, useState, ReactNode } from "react";
import { Task } from "../types/Task";

interface TaskContextType {
  tasks: Task[];
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}
