import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { Todo } from "../models/todo";
import { TodoStatus } from "../models/todo-status";
import { v4 } from "uuid";

@Injectable()
export class TodoService {
  private todoList: Todo[];
  private _todoList$: ReplaySubject<Todo[]> = new ReplaySubject();

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

  createTodo(todo: Todo) {
    this.todoList.push(todo);
    this._todoList$.next(this.todoList);
    this.cacheList();
  }

  setTodoStatus(id: string, status: TodoStatus) {
    const todo = this.getTodoById(id);
    if (!!todo) {
      todo.status = status;
    }
  }

  setTodoDescription(id: string, description: string) {
    const todo = this.getTodoById(id);
    if (!!todo) {
      todo.description = description;
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
