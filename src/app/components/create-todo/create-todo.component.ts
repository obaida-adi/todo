import { Component, OnInit } from "@angular/core";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Todo } from "src/app/models/todo";
import { TodoStatus } from "src/app/models/todo-status";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-create-todo",
  templateUrl: "create-todo.component.html",
  styleUrls: ["create-todo.component.scss"],
})
export class CreateTodoComponent {
  faPlus = faPlus; 
  description: string = '';

  constructor(private todoService: TodoService) {}

  createTodo(): void {

    const date = new Date();

    if (this.description === '') {
      alert('Please fill in a description.');
    } else {
      const newTodo: Todo = {
        id: this.todoService.generateUUID(),
        status: TodoStatus.REMAINING,
        date: `${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`,
        description: this.description,
      };
  
      this.todoService.createTodo(newTodo);
      this.resetInput();
    }
  }

  private resetInput(): void {
    this.description = '';
  }
}
