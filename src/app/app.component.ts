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
   // console.log(first,second);
   console.log(this.name);
  }
  show(){
    console.log(this.name);
  }
  select(){
    console.log("you has been selectec some text");
  }
  blur(){
    console.log('input has been losed focus');
  }
  focus(){
    console.log('input has beed on focus');
  }

}
