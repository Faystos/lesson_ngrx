import {createReducer, on} from '@ngrx/store';

import {CounterStateInterface} from '../counterStateInterface';
import {changeUpdateAtAction, clearAction, decreaseAction, increaseAction} from '../action/action';


export const initialState: CounterStateInterface = {
  count: 0
};

export const counterReducer = createReducer(
  initialState,
  on(increaseAction,
    state => ({
      ...state,
      count: state.count + 1
    })),
  on(decreaseAction, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clearAction, state => ({
    ...state,
    count: 0
  })),
  on(changeUpdateAtAction, (state, action) => ({
    ...state,
    updateAt: action.updateAt
  }))
  );






