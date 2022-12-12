import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

export const initialState : actions.filterValid = 'all';

export const filterReducer = createReducer<actions.filterValid>(initialState,
  on(actions.setFilter, (state, { filter }) => state = filter),
  // on(actions.clearTodosCompleted, state => )
);

// export const filterReducer = (state:any, action : Action) => {
//   return _filterReducer(state, action)
// }