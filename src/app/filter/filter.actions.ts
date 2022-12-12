import { createAction, props } from '@ngrx/store';

export type filterValid = 'all' | 'active' | 'completed';

export const setFilter = createAction(
	'[Filter Component] Set filter',
	props<{ filter : filterValid }>()
);

// export const clearTodosCompleted = createAction(
// 	'[Filter Component] Clean Todos Completed'
// );