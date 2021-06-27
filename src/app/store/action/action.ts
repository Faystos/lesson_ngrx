import {createAction, props} from '@ngrx/store';
import {ActionType} from '../type/actionType';

export const increaseAction = createAction(ActionType.COUNTER_INCREASE);
export const decreaseAction = createAction(ActionType.COUNTER_DECREASE);
export const clearAction = createAction(ActionType.COUNTER_CLEAR);
export const changeUpdateAtAction = createAction(ActionType.COUNTER_UPDATE_AT, props<{ updateAt: number }>());
