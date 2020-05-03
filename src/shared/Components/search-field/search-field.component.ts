import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'cc-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  @Input() placeholder: string;
  @Output()
  changes = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
