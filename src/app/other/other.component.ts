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
  constructor(private route:ActivatedRoute) {
    //ger params from  query params 
    this.id=this.route.snapshot.queryParamMap.get('id');
    //this.name=this.route.snapshot.queryParamMap.get('name');
    this.name=this.route.snapshot.queryParams['name'];
    this.status= this.route.snapshot.queryParamMap.get('status');

    console.log(this.id,this.name,this.status);



   }

  ngOnInit() {
  }

}
