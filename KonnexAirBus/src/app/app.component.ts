import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core'
import {GlobalConstants} from './../app/global-constants';

@Component({
  selector:'pm-root',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit{

  title:string='Konnex';
  ngOnInit(): void {
    
  }

  

  isLogin:boolean=false;

   onLogin(){
  
    this.isLogin=GlobalConstants.loginCheck;
     console.log("done");
     console.log(this.isLogin);
     if(this.isLogin)
      return true;
      return false;
   }

   onLogout(){
    GlobalConstants.loginCheck=false;
    
   }

 
}