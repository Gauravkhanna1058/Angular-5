import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userlist } from './userlist';

@Injectable()
export class UserService {
  private userUrl  =  'https://reqres.in/api/users?page=2';
  
  constructor(private http: HttpClient) { }

  getuserlist() : Observable<Userlist>{
    return this.http.get<Userlist>(this.userUrl);
  } 
}
