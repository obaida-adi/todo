import { TodoStatus } from './todo-status';

export interface Todo {
    id: string,
    date: Date,
    description: string,
    status: TodoStatus
}