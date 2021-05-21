import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/products/product-list.component';

import { ProductDetailComponent } from './components/products/product-detail.component';
import {ProductDetailGuard} from './components/products/product-detail.guard'
import {WelcomeComponent} from './components/home/welcome.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ProductListComponent,
    ProductDetailComponent,
    HomepageComponent,
 
    
    WelcomeComponent,
   
    LoginComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'homepage', component:HomepageComponent },
      {path:'products',component:ProductListComponent},
      {path:'products/:id',canActivate:[ProductDetailGuard],component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent},
      { path: 'login', component:LoginComponent },
      
      { path: 'user/:username', component:LoginComponent },
      
     
      
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
