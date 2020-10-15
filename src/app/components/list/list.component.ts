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
}
