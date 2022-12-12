import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
	'[Todo Component] Create Todo',
	props<{ text : string }>()
);

export const toggleTodo = createAction(
	'[Todo Component] Toggle Todo',
	props<{ id : number }>()
);

export const editTodo = createAction(
	'[Todo Component] Edit Todo',
	props<{ id : number, text : string }>()
);

export const deleteTodo = createAction(
	'[Todo Component] Delete Todo',
	props<{ id : number }>()
);

export const toggleAllTodo = createAction(
	'[Todo Component] Toggle All Todo',
	props<{ completed : boolean }>()
);

export const clearCompleted = createAction(
	'[Todo Component] Clear Completed Todo'
);