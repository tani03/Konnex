import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'
import { LoginComponent } from './components/login/login.component';


@Component({
  selector:'pm-root',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   
  }

  // @ViewChild(LoginComponent) loginComponent;
  // title:string='Konnex';
  // isLogin:boolean=false;


  // ngAfterViewInit() {  
  //   this.isLogin= this.loginComponent.isLogin;  
  //   }  

  // onLogin(){
  //  // this.changeLoginValue()
  //   console.log("done");
  //   console.log(this.isLogin)
  // }

  // // changeLoginValue(){
  // //   this.isLogin=this.loginComponent.changeValue();
  // // }

}