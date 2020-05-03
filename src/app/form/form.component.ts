import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

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

  name2: string;
  email2: string;
  phone2: string;  

  constructor() { }

  ngOnInit() {
  }

  user: User = new User();

  addUser(){
      console.log(this.user);
  }

  submit(form: NgForm){
     console.log('form', form);
  }

}