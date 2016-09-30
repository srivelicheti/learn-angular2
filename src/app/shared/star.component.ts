import {Component , OnInit, Input, Output, OnChanges,EventEmitter } from 'angular2/core'

@Component({
    selector:'aci-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
    @Input('rating')
    rating : number;
    starWidth : number;
    ngOnInit() : void{
        this.starWidth = (this.rating * 86)/5;
    };
    ngOnChanges() :void{
        this.starWidth = (this.rating * 86)/5;
    }
    @Output()
    ratingClicked : EventEmitter<string> = new EventEmitter<string>();
    onRatingClick() : void{
        this.ratingClicked.emit('clicked!!');
    }
}