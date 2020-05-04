import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';

export class User{
  name: string; 
  email: string;
  phone: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

name2: string;
  email2: string;
  phone2: string;  

  myForm3 : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.init();  
  }

  user: User = new User();

  init() {
    // this.myForm3 = new FormGroup({
    //     "userName": new FormControl("Tom", Validators.required),
    //     "userEmail": new FormControl("", [Validators.required,Validators.email]),
    //     "userPhone": new FormControl("", Validators.pattern("[0-9]{10}")),
    //     "phones": new FormArray([new FormControl("+7", Validators.required)])
    // });

    this.myForm3 = this.formBuilder.group({
        "userName": ["Tom", [Validators.required]],
        "userEmail": ["", [ Validators.required, Validators.email]],
        "userPhone": ["", Validators.pattern("[0-9]{10}")],
        "phones": this.formBuilder.array([["+7", Validators.required]])
    });
  }

  addUser(){
    console.log(this.user);
  }

  submit(form: NgForm){
    console.log('form', form);
  }

 submit3(){
    console.log(this.myForm3);
  }

  addPhone(){
    (<FormArray>this.myForm3.controls["phones"]).push(new FormControl("+7", Validators.required));
  }

}