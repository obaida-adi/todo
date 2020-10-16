import { TodoStatus } from './todo-status';

export interface Todo {
    id: string,
    date: string,
    description: string,
    status: TodoStatus
}