import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// import { Todo } from './../models/todo.model';
import { AppState } from './../../app.reducer';
import * as actions from './../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  completed : boolean = false;

  constructor(private _store : Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completed = !this.completed;
    this._store.dispatch(actions.toggleAllTodo({ completed : this.completed }));
  }

}
