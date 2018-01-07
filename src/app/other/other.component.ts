import { CallapiService } from './../Services/callapi.service';
import { SharedService } from './../Services/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
 name :string;
 id:string;
 status:string;
 posts:any;
  constructor(private route:ActivatedRoute,
    public shared:SharedService,
  private call:CallapiService) {
    //ger params from  query params 
    this.id=this.route.snapshot.queryParamMap.get('id');
    //this.name=this.route.snapshot.queryParamMap.get('name');
    this.name=this.route.snapshot.queryParams['name'];
    this.status= this.route.snapshot.queryParamMap.get('status');

  //  console.log(this.id,this.name,this.status);
  console.log(this.shared.getToken());
  console.log(this.shared.getLogin());
  this.shared.setUser("new name value from other component");



   }

  ngOnInit() {
  }

  //call api 
  CallAPI(){
   this.call.getPosts().subscribe(
     next=>{
       console.log(next)
     },
     error=>{
       console.log(error)
     },
     ()=>{
       console.log('Done');
     }
   )
  }

}
