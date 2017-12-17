import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../shared/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card = null;

  @Output() transmitFavEvent3 : EventEmitter<number> = new EventEmitter<number>();
  @Output() transmitShareEvent3 : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitFavEvent3(event) {
    this.transmitFavEvent3.emit(event);
  }
  emitShareEvent3(event) {
    this.transmitShareEvent3.emit(event);
  }
}
