import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';
@Injectable()
export class ControlService {

  constructor(private router:Router) { }


  canActivate(){
    var token= localStorage.getItem('token');
    if(token){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
