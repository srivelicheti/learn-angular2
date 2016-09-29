import {Component , OnInit, Input } from 'angular2/core'

@Component({
    selector:'aci-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnInit {
    @Input('rating')
    rating : number;
    starWidth : number;
    ngOnInit() : void{
        this.starWidth = (this.rating * 86)/5;
    }
}