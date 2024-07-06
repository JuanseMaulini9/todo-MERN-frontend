import { TaskCardInterface } from "./types/storeInterface";
export const fakeTasks: TaskCardInterface[] = [
  {
    id: "60d0fe4f5311236168a109ca",
    title: "Task 1",
    description: "Description for task 1",
    expires: new Date("2024-12-31"),
    total: 10,
    completedTasks: 3,
    stateValue: "to do",
  },
  {
    id: "60d0fe4f5311236168a109cb",
    title: "Task 2",
    description: "Description for task 2",
    expires: new Date("2024-11-30"),
    total: 8,
    completedTasks: 5,
    stateValue: "in process",
  },
  {
    id: "60d0fe4f5311236168a109cc",
    title: "Task 3",
    description: "Description for task 3",
    expires: new Date("2024-10-31"),
    total: 15,
    completedTasks: 15,
    stateValue: "done",
  },
  {
    id: "60d0fe4f5311236168a109cd",
    title: "Task 4",
    description: "Description for task 4",
    expires: new Date("2024-09-30"),
    total: 12,
    completedTasks: 6,
    stateValue: "in process",
  },
  {
    id: "60d0fe4f5311236168a109ce",
    title: "Task 5",
    description: "Description for task 5",
    expires: new Date("2024-08-31"),
    total: 20,
    completedTasks: 10,
    stateValue: "to do",
  },
];

export default fakeTasks;
