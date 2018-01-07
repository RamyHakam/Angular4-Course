import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CallapiService {

  constructor(private http: Http) { }


  //call api 
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(result=>result.json());
  }

}
