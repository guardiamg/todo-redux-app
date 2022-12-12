import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from './../models/todo.model';
import { AppState } from './../../app.reducer';
import * as actions from './../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo! : Todo;
  @ViewChild('inputFisical') txtFisicalInput! : ElementRef;

  checkCompleted! : FormControl;
  txtInput! : FormControl;
  
  editing : boolean = false;

  constructor(private _store : Store<AppState>) {}

  ngOnInit(): void {
    this.todo = {...this.todo};
    // this.todo.completed = true;
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(valor => {
      this._store.dispatch(actions.toggleTodo({ id : this.todo.id }));
    });
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtFisicalInput.nativeElement.select();
    }, 1);
  }

  finishEdition() {
    this.editing = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.text) return;

    this._store.dispatch(actions.editTodo({ id : this.todo.id, text : this.txtInput.value }));
  }

  delete() {
    this._store.dispatch(actions.deleteTodo({ id : this.todo.id }));
  }
}
