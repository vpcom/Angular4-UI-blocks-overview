import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../shared/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @Input() id: number = -1;
  // @Input() title: string = '';
  // @Input() text: string = '';
  // @Input() date: string = '';
  // @Input() time: string = '';
  // @Input() place: string = '';
  // @Input() image: string = '';
  // @Input() share: string = '';

  @Input() card: Card = null;


  @Output() transmitFavEvent3 : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emitFavEvent3(event) {
    this.transmitFavEvent3.emit(this.card.id);
  }
}
