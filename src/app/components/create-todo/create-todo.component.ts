import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoStatus } from "src/app/models/todo-status";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-create-todo",
  templateUrl: "create-todo.component.html",
  styleUrls: ["create-todo.component.scss"],
})
export class CreateTodoComponent {
  description: string;

  constructor(private todoService: TodoService) {}

  createTodo(): void {
    const newTodo: Todo = {
      id: this.todoService.generateUUID(),
      status: TodoStatus.ACTIVE,
      date: new Date(),
      description: this.description,
    };

    this.todoService.createTodo(newTodo);
    this.resetInput();
  }

  private resetInput(): void {
    this.description = "";
  }
}
