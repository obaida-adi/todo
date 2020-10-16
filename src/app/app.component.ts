import { Component } from '@angular/core';
import { Filter } from './models/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  filter: Filter = Filter.ALL;

  updateFilter(filter: Filter): void {
    this.filter = filter;
  }
}
