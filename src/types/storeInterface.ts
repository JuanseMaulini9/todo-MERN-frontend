export interface TaskCardInterface {
  id: string;
  title: string;
  description: string;
  expires: Date;
  total: number;
  completedTasks: number;
  stateValue: string;
}

export interface PayloadInterface {
  id: string;
  newStateValue: string;
}
