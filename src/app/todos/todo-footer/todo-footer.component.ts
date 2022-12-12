import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import * as actions from './../../filter/filter.actions';
import { clearCompleted } from './../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  actualFilter : actions.filterValid = 'all';
  filters : actions.filterValid[] = ['all', 'active', 'completed'];

  itemLeft : number = 0;  

  constructor(
    private _store : Store<AppState>
  ) { }

  ngOnInit(): void {
    // this._store.select('filter').subscribe(filter => this.actualFilter = filter)

    this._store.subscribe(({todos, filter}) => {
      this.actualFilter = filter;
      this.itemLeft = todos.filter(todo => !todo.completed).length;
    })
  }

  changeFilter(filter : actions.filterValid) {
    this._store.dispatch(actions.setFilter({ filter }));
  }

  clearCompleted() {
    this._store.dispatch(clearCompleted());
  }
}
