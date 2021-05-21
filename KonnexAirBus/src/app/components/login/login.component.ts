import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

import { User } from 'src/app/models/user.model';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();
  isLogin:boolean=false;
 

  credentials={
    username:'',
    password:''
  }

  currentUser:User={
    username:'',
    password:''
  }
  constructor(
    private loginService: LoginService,
    private router:Router
    ) { }
  
  ngOnInit(): void {
  }
  

  onSubmit(){
   
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials!=null)){
      console.log("Loggingggg");

     //uncomment these lines//
        this.loginService.get(this.credentials.username)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      if(this.currentUser.password==this.credentials.password){

       //uncomment these lines

       //comment these lines
        // if(this.credentials.password=="taniya"){

      //comment above line

      
        console.log("Correct password");
        this.isLogin=true;
        
       // this.changeValue()

        this.router.navigate(['/homepage']);
      }
      else{
        console.log(this.credentials.username)
        console.log(this.credentials.password)
        alert("Incorrect credentials");
      }
    }
    else{
      console.log(this.credentials.username)
      alert("fields are empty");
    }
  }

  // changeValue(){
  //   this.newItemEvent.emit(this.isLogin);
  // }

}
