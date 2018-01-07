import { Component ,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'first',
    templateUrl: 'first.component.html',
    styleUrls: ['first.component.css']
})
export class FirstComponent {
    id:string;
    name:string;
    @Input() message:string;
    constructor(private route:ActivatedRoute){
        //get optional params 
        this.id= this.route.snapshot.paramMap.get('id');
        this.name=this.route.snapshot.params['name'];
       // console.log(this.id);
        //console.log(this.name);

    }

}
