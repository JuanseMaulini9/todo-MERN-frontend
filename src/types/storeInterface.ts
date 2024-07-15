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

export interface BoardInterface {
  _id: string;
  nameBoard: string;
  user: string;
  tasks: [string];
}
