import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TooltipComponent implements OnInit {
  @Input() items: Observable<any[]>;
  @Input() config;

  count = 0;

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  _items: any[];

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.count = 5;
      this.cdr.detectChanges();
      // detectChanges() говорит Angular запустить обнаружение изменений в компоненте и его потомках.
    }, 6000);
  }

  ngOnInit() {
    this.items.subscribe(items => {this._items = items;});
    /* 
     <div *ngFor="let item of _items">Без async - {{item.title}}</div>
    После нажатия на кнопку, мы не увидим обновленное представление.

    <div *ngFor="let item of items | async">async - {{item.title}}</div>
    Обновления отработают
  */

  } 

  add() { this.count++; } 
  /*
  Когда мы жмем на кнопку, Angular запускает цикл обнаружения изменений и представление обновляется, как и ожидалось.
  Правило применяется только к событиям DOM 
  Aсинхронные операциии НЕ БУДУТ ТРИГГЕРОМ для обновления
  */

}