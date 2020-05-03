import { Component, OnInit } from '@angular/core';

export class User{
    name: string; 
    email: string;
    phone: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  user: User = new User();
  addUser(){
      console.log(this.user);
  }

}