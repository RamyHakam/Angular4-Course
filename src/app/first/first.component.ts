import { Component ,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Output ,EventEmitter } from '@angular/core';


@Component({
    selector: 'first',
    templateUrl: 'first.component.html',
    styleUrls: ['first.component.css']
})
export class FirstComponent {
    id:string;
    name:string="my first name is ramy";
    x:number=20;
    @Input() message:string;
    @Output() notify=new EventEmitter<number>();
    constructor(private route:ActivatedRoute){
        //get optional params 
        this.id= this.route.snapshot.paramMap.get('id');
     //   this.name=this.route.snapshot.params['name'];
       // console.log(this.id);
        //console.log(this.name);

    }
    //send data to parant 
    Send(){

        this.notify.emit(this.x);
    }
    update(newV){
        this.x= newV;
    }

}
