import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from './../models/todo.model';
import { AppState } from './../../app.reducer';
import { filterValid } from './../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos : Todo[] = [];
  actualFilter : filterValid = 'all';

  constructor(private _store : Store<AppState>) {}

  ngOnInit(): void {
    this._store.subscribe(({ todos, filter }) => {
        this.todos = todos;
        this.actualFilter = filter;
      }
    )
  }

}
