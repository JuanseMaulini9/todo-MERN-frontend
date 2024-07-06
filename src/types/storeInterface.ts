export interface TaskCardInterface {
  id: string;
  title: string;
  description: string;
  expires: string;
  total: number;
  completedTasks: number;
  stateValue: string;
}

export interface PayloadInterface {
  id: string;
  newStateValue: string;
}
