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
  //load 
  load(){
    var data=[];
    for(let i=0;i<10;i++){
      var item={id:i,name:"name"+i,photo:"avatar.jpg"}
      data.push(item);
    }
    return data;
  }


}
