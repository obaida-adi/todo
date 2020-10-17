import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Todo } from "../models/todo";
import { TodoStatus } from "../models/todo-status";
import { v4 } from "uuid";

@Injectable()
export class TodoService {
  private todoList: Todo[];
  private _todoList$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  constructor() {
    this.getCachedTodoList();
  }

  generateUUID(): string {
    return v4();
  }

  private getCachedTodoList(): void {
    const list = localStorage.getItem("list");
    if (!!list) {
      this.todoList = JSON.parse(list);
      this._todoList$.next(this.todoList);
    } else {
      this.todoList = [];
    }
  }

  deleteTodo(id: string): void {
    const index = this.todoList.findIndex((todo: Todo) => todo.id === id);
    if (index > -1) {
      this.todoList.splice(index, 1);
      this.updateTodoList();
    }
  }

  private updateTodoList() {
    this._todoList$.next(this.todoList);
    this.cacheList();
  }

  createTodo(todo: Todo) {
    this.todoList.push(todo);
    this.updateTodoList();
  }

  setTodoStatus(id: string, status: TodoStatus) {
    const todo = this.getTodoById(id);
    if (!!todo) {
      todo.status = status;
      this.updateTodoList();
    }
  }

  private getTodoById(id: string): Todo | undefined {
    return this.todoList.find((todo: Todo) => todo.id === id);
  }

  private cacheList(): void {
    localStorage.setItem("list", JSON.stringify(this.todoList));
  }

  getTodoList(): Observable<Todo[]> {
    return this._todoList$;
  }
}
