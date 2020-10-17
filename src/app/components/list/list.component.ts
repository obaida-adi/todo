import { Component, Input } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";
import { TodoStatus } from "src/app/models/todo-status";
import { Observable } from "rxjs";
import { faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Filter } from '../../models/filter';

@Component({
  selector: "app-list",
  templateUrl: "list.component.html",
  styleUrls: ["list.component.scss"],
})
export class ListComponent {
  @Input() filter: Filter = Filter.ALL;

  faTrash = faTrash;
  faEdit = faEdit;
  faSave = faSave;
  todoList$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todoList$ = this.todoService.getTodoList();
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
