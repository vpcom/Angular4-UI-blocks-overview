import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-fav',
  templateUrl: './card-fav.component.html',
  styleUrls: ['./card-fav.component.css']
})
export class CardFavComponent implements OnInit {

  @Input() id: number = -1;
  @Output() change : EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  clicked(event) {
    event.target.innerText === 'favorite_border' ? event.target.innerText = 'favorite'
                                                 : event.target.innerText = 'favorite_border';
    console.log(this.id);
    this.change.emit(this.id);
  }

}
