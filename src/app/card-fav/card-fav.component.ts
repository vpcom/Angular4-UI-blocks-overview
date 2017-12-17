import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ShareItem } from '../shared/share-item';

@Component({
  selector: 'app-card-fav',
  templateUrl: './card-fav.component.html',
  styleUrls: ['./card-fav.component.css']
})
export class CardFavComponent implements OnInit {

  @Input() id: number = -1;
  @Output() transmitFavEvent : EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  setFav(event) {
    event.target.innerText === 'favorite_border' ? event.target.innerText = 'favorite'
                                                 : event.target.innerText = 'favorite_border';
    this.transmitFavEvent.emit(this.id);
  }
}
