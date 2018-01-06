import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  user:string;
  token:string;
  login:boolean;
  constructor() { }


  public getUser(){
    return this.user;
  }
  public setUser(data){
    this.user= data
  }

  public getToken(){
    return this.token;
  }
  public setToken(data){
    this.token= data
  }

  public getLogin(){
    return this.login;
  }
  public setLogin(data){
    this.login= data
  }

}
