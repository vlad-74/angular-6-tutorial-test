import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  @Input()
  model;
}
