import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators} from '@angular/forms';

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

  myForm3 : FormGroup;

  constructor() { }

  ngOnInit() {
    this.init();      
  }

  user: User = new User();

  init() {
    this.myForm3 = new FormGroup({
        "userName": new FormControl("Tom", Validators.required),
        "userEmail": new FormControl("", [
                            Validators.required, 
                            Validators.email 
                        ]),
        "userPhone": new FormControl("", Validators.pattern("[0-9]{10}")) 
    });
  }

  addUser(){
    console.log(this.user);
  }

  submit(form: NgForm){
    console.log('form', form);
  }

}