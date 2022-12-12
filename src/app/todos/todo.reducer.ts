import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState : Todo[] = [
	new Todo('Save the world'),
	new Todo('Kill Thanos'),
	new Todo('Collect the stones of infinity'),
	new Todo("Steal captain america's shield")

];

export const todoReducer = createReducer(initialState,
  // on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  // on(actions.toggleTodo, (state, { id }) => state.map(todo => todo.id === id ? { ...todo, completed : !todo.completed } : todo)),
  // on(actions.editTodo, (state, { id, text }) => state.map(todo => todo.id === id ? { ...todo, text } : todo)),
  // on(actions.deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  // on(actions.toggleAllTodo, (state, { completed }) => state.map(todo => todo ? { ...todo, completed } : todo)),
  on(actions.createTodo, (state, { text }) => createTodo(state, text)),
  on(actions.toggleTodo, (state, { id }) => toggleTodo(state, id)),
  on(actions.editTodo, (state, { id, text }) => editTodo(state, id, text)),
  on(actions.deleteTodo, (state, { id }) => deleteTodo(state, id)),
  on(actions.toggleAllTodo, (state, { completed }) => toggleAllTodo(state, completed)),
  on(actions.clearCompleted, state => clearCompleted(state)),
);

// export function todoReducer(state, action) {
// 	return _todoReducer(state, action);
// }


const createTodo = (state : Todo[], text : string) => [...state, new Todo(text)];
const toggleTodo = (state : Todo[], id : number) => state.map((todo : any) => todo.id === id ? { ...todo, completed : !todo.completed } : todo);
const editTodo = (state : Todo[], id : number, text : string) => state.map(todo => todo.id === id ? { ...todo, text } : todo);
const deleteTodo = (state : Todo[], id : number) => state.filter(todo => todo.id !== id);
const toggleAllTodo = (state : Todo[], completed : boolean) => state.map(todo => todo ? { ...todo, completed } : todo);
const clearCompleted = (state : Todo[]) => state.filter(todo => !todo.completed);