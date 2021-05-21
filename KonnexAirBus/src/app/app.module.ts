import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/products/product-list.component';
import { StarComponent } from './components/shared/star.component';
import { ProductDetailComponent } from './components/products/product-detail.component';
import {ProductDetailGuard} from './components/products/product-detail.guard'
import {WelcomeComponent} from './components/home/welcome.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component'
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    EmployeeListComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',canActivate:[ProductDetailGuard],component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent},
      { path: 'login', component:LoginComponent },
      { path: 'homepage', component:HomepageComponent },
      { path: 'user/:username', component:LoginComponent },
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
