import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { BadgeComponent } from './components/badge/badge.component';
import { FilterComponent } from './components/filter/filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateTodoComponent,
    BadgeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
