import { LoginService } from './Services/login.service';
import { FirstComponent } from './first/first.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="my namedddd";
  constructor( private mylogin:LoginService){
    var first=this.mylogin.login('admin2','admin');
    var second=this.mylogin.login('admin','admin');
    console.log(first,second);
  }

}
