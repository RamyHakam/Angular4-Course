import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StreamService {
  dataStream :Observable<string>
  dataStream2 :Observable<string>

  constructor() { }


  //send data 
 createStream(){
    this.dataStream= new Observable(observer=>{
      setTimeout(() => {
        observer.next("value1");
      }, 1000);
      setTimeout(() => {
        observer.next('vaule2');
      }, 3000);
      setTimeout(() => {
        observer.next('value3');
      }, 5000);
      setTimeout(() => {
         observer.complete();
      },7000);
      setTimeout(() => {
        observer.next("value4");
     },8000);
    })
    return this.dataStream;
  }
  createStream2(){
    this.dataStream2= new Observable(observer=>{
      setTimeout(() => {
        observer.next("value1");
      }, 1000);
      setTimeout(() => {
        observer.next('vaule2');
      }, 3000);
      setTimeout(() => {
        observer.error('Some Errors');
      }, 5000);
      setTimeout(() => {
         observer.complete();
      },7000);
     
    })
    return this.dataStream2
  }

}
