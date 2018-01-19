import { StreamService } from './../Services/stream.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'app/Services/shared.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
id:string;
  constructor( private route:ActivatedRoute,public shared:SharedService,private MyStream:StreamService) { 
    //get id from route
   // this.id= this.route.snapshot.paramMap.get('id');
    this.id=this.route.snapshot.params['id'];
    //console.log(this.id);
    console.log(this.shared.getUser());
    console.log(this.shared.getLogin());
    this.shared.setToken("029029209209209209");

  }

  ngOnInit() {
    
  }
  loadme(){
    this.MyStream.createStream().subscribe(
      next=>{
        console.log(next);
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log("Done ");
      }

    )
  }
  loadme2(){
    this.MyStream.createStream2().subscribe(
      next=>{
        console.log(next);
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log("Done2 ");
      }

    )
  }


}
