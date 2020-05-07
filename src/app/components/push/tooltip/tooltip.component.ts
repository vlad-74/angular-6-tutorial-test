import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TooltipComponent {

  @Input() config;
  count = 0;

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  add() { this.count++; } // Когда мы жмем на кнопку, Angular запускает цикл обнаружения изменений и представление обновляется, как и ожидалось.

}