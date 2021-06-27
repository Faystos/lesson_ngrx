import {ActionReducerMap, MetaReducer} from '@ngrx/store';

import {State} from '../store/stateInterface';
import { environment } from '../../environments/environment';
import {counterReducer} from '../store/reducers/reducer';

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
