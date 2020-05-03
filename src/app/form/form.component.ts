import { Component, OnInit } from '@angular/core';

export class Phone{
    constructor(
      public title: string, 
      public price: number, 
      public company: string)
    { }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 title: string;
price: number;
company: string;
  
phones: Phone[] = [];
companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
     

  constructor() { }

  ngOnInit() {
  }

      addPhone(){
        this.phones.push(new Phone(this.title, this.price, this.company));
    }

}