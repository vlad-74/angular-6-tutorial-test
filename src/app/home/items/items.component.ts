import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items/items.component.css']
})
export class ItemsComponent implements OnInit {

  item: string;
  
  constructor() { }

  ngOnInit() {
  }

}