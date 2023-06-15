import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserDTO } from './user-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UseroperationService {

  [x: string]: any;

  baseURL:string= 'http://localhost:2004';
  
  allUserEndpoint:string = this.baseURL+'/user/users';

  submitUserEndPoint:string=this.baseURL+'/user/add';

  
  userArr:UserDTO[]=[];

  constructor(private http:HttpClient){}

  addUser(user:User):Observable<User>
  {
    console.log("inside method 1 : User Added" + user);

  return this.http.post<User>(`${this.submitUserEndPoint}`,user);
  }


  getAllBookingFromSpring():Observable<UserDTO[]>
  {
    console.log("inside service : "+this. allUserEndpoint);

    return this.http.get<UserDTO[]>(`${this. allUserEndpoint}`);
}

  
}

