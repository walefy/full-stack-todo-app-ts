export type task = {
  taskId: number;
  taskName: string;
  completed: boolean;
  created_on: Date;
};

export type taskWithoutId = Omit<task, 'task_id'>;
