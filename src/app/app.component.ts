import { SharedService } from './Services/shared.service';
import { LoginService } from './Services/login.service';
import { FirstComponent } from './first/first.component';
import { Component ,ViewChild ,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name:string;
  password:string;
  status:boolean;
  names:Array<object>
  id:string="03003";
   //counter of notification 
   counter:number=0;
   user:{ name , status, id ,age};

   @ViewChild(FirstComponent) myfirst : FirstComponent;

  constructor( private mylogin:LoginService ,private myrouter:Router,public myshared:SharedService){
    
    
    //create user object 
    this.user={name:'ramy',status:true, age:40, id:20}
    
    
    var first=this.mylogin.login('admin2','admin');
    var second=this.mylogin.login('admin','admin');


  

   // console.log(first,second);
  // console.log(this.name);
  }
  // show(){
  //   console.log(this.name);
  // }
  // select(){
  //   console.log("you has been selectec some text");
  // }
  // blur(){
  //   console.log('input has been losed focus');
  // }
  // focus(){
  //   console.log('input has beed on focus');
  // }

 login(){
  var result= this.mylogin.login(this.name,this.password);
  this.status=result;
  this.myshared.setUser('ramy');
  this.myshared.setToken('kdjkdjkdjdkjkjd');
  this.myshared.setLogin(true);
  //save token to user local stoage

  //console.log("shared data has been setted");
  if(this.status){
    //////navigate to new 
    localStorage.setItem('token',"tkjkjgkjgkjfkjfkf");

    this.myrouter.navigate(['/new/02020']);
  }
  else {
    /////naviage to other
    this.myrouter.navigate(['/other']);
  }
  // console.log(result);
   this.loadnames();
   //console.log(this.names);
 }
 //load names 
 loadnames(){
  this.names=this.mylogin.load()
 }
 //navagite from ts 
 //send optional params
 goToFirst(){
   this.myrouter.navigate(['/first',{id:39494,name:'ramy'}])

 }
 //send with query params
 goToOther(){
  this.myrouter.navigate(['/other'],{queryParams:{id:this.id,name:'ramy',status:true}})

}
//send required params
goToNew(){
  this.myrouter.navigate(['/new',this.id])

}
sendMessage(){
  return "ramy hakam";
}
//get from child 

getFromChild(event){
  this.counter+=event;
}

//get name from first compmnet  
getME(){
  console.log(this.myfirst.name);
}

//change x on first 
changeX(){
  this.myfirst.update(13);

}

ngAfterViewInit(){


}


//chage classes 

ChangeClass(){
   return  {
     'age' : this.user.age>50,
     'id':this.user.id==25,
     'active':this.user.status
   }
   
}


}
