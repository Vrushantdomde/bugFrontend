import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  PATH_OF_API = "http://localhost:8080";
  constructor( private httpClient: HttpClient,
    private userService : UserService
    ) { }

  public haveCustomerProfile() {
    let userName ;
    if(this.userService.isUserLogin()){
       userName=this.userService.getLoginUser();
       return this.httpClient.get(`${this.PATH_OF_API}/customer/haveCustomerProfile/${userName}`)
    }
   return null;
  }
}
