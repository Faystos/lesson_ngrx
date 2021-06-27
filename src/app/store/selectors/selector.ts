import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CounterStateInterface} from '../counterStateInterface';

export const featureSelector = createFeatureSelector<CounterStateInterface>('counter');
export const counterSelector = createSelector(featureSelector, state => state.count);
export const updateAtSelector = createSelector(featureSelector, state => state.updateAt);
