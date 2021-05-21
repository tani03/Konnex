import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs'
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:9000"
  constructor(private http:HttpClient) { }

  get(username: any):Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`);
  }

}
