import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import {changeUpdateAtAction, clearAction, decreaseAction, increaseAction} from './store/action/action';
import {map} from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  updateAt$ = createEffect(() => this.actions$.pipe(
    ofType(increaseAction, decreaseAction, clearAction),
    map(() => changeUpdateAtAction({updateAt: Date.now()}))
  ));
}
