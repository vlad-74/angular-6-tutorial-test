import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITabSwitcherConfig } from '../../Models/Abstract/TabSwitcherConfig.interface';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'cc-tab-switcher',
  templateUrl: './tab-switcher.component.html',
  styleUrls: ['./tab-switcher.component.scss']
})
export class TabSwitcherComponent implements OnInit {

  @Input()
  config: ITabSwitcherConfig = {
    tabs: [],
    selectedIndex: null
  };

  @Output()
  selectedIndexChange = new EventEmitter<number>();

  @Output()
  selectedTabChange =  new EventEmitter<MatTabChangeEvent>();

  constructor() {
  }

  ngOnInit() {
  }

}
