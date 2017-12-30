import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { 

    //login service logic 

  }
  login (user ,pass){
    if(user=="admin"&& pass=="admin"){
      return true;
    }
    else {
      return false;
    }
  }


}
