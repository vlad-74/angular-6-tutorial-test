import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
})
export class PushComponent implements OnInit {
  config = {
    position: 'top'
  };

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.config.position = 'bottom'; // 1 вариант НЕ СРАБОТАЕТ при ChangeDetectionStrategy.OnPush в дочернем компоненте
    // this.config = {position: 'bottom'} // 2 вариант СРАБОТАЕТ при ChangeDetectionStrategy.OnPush в дочернем компоненте
  }

}