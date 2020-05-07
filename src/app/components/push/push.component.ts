import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
})
export class PushComponent implements OnInit {
  config = {position: 'top'};
  items = [];
  items$ = new BehaviorSubject(this.items);

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.config.position = 'bottom'; // 1 вариант НЕ СРАБОТАЕТ при ChangeDetectionStrategy.OnPush в дочернем компоненте
    // this.config = {position: 'bottom'} // 2 вариант СРАБОТАЕТ при ChangeDetectionStrategy.OnPush в дочернем компоненте
  }

  addAsync() {
    this.items.push({ title: Math.random() })
    this.items$.next(this.items);
  }

}