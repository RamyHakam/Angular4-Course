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
  constructor( private route:ActivatedRoute,public shared:SharedService) { 
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


}
