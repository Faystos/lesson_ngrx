import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {counterSelector, updateAtSelector} from './store/selectors/selector';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {clearAction, decreaseAction, increaseAction} from './store/action/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count$: Observable<number>;
  cannotDecrease$: Observable<boolean>;
  updateAt$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues = (): void => {
    this.count$ = this.store.select(counterSelector);
    this.cannotDecrease$ = this.count$.pipe(
      map(count => count <= 0)
    );
    this.updateAt$ = this.store.select(updateAtSelector);
  }

  increase = (): void => {
    this.store.dispatch(increaseAction());
  }

  decrease = (): void => {
    this.store.dispatch(decreaseAction());
  }

  clear = (): void => {
    this.store.dispatch(clearAction());
  }
}
