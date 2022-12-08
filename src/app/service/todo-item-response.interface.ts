import { TaskItem } from "../model/task-item.interface";

export interface TodoItemResponse {
    message: string;
    body: TaskItem;
}