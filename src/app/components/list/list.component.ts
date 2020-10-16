import { Component, OnDestroy, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";
import { takeWhile } from "rxjs/operators";
import { TodoStatus } from "src/app/models/todo-status";
import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "list.component.html",
  styleUrls: ["list.component.scss"],
})
export class ListComponent {
  todoList: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todoList = this.todoService.getTodoList();
  }

  editTodo(todo: Todo): void {

  }

  changeTodoStatus(todo: Todo): void {
    switch(todo.status) {
      case TodoStatus.REMAINING: {
        this.todoService.setTodoStatus(todo.id, TodoStatus.COMPLETED);
        break;
      }
      case TodoStatus.COMPLETED: {
        this.todoService.setTodoStatus(todo.id, TodoStatus.REMAINING);
        break;
      }
    }
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id);
  }
}
