import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
