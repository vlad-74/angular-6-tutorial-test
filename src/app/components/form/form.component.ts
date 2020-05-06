import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

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
   
  id: number;
  product: string;
  price: string;
     
    private routeSubscription: Subscription;
    private querySubscription: Subscription;

  myForm3 : FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.init();      
  }

  user: User = new User();

  init() {
    this.routeSubscription = this. route.params.subscribe(params=>this.id=params['id']);
        this.querySubscription = this. route.queryParams.subscribe(
            (queryParam: any) => {
                this.product = queryParam['product'];
                this.price = queryParam['price'];
            }
        );

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