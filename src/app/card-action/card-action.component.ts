import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ShareItem } from '../shared/share-item';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.css']
})
export class CardActionComponent implements OnInit {

  @Input() id: number = -1;
  @Input() shareCollection: ShareItem[] = null;

  @Output() transmitFavEvent2 : EventEmitter<number> = new EventEmitter<number>();
  @Output() transmitShareEvent2 : EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  emitFavEvent2(event) {
    this.transmitFavEvent2.emit(event);
  }
  emitShareEvent2(event) {
    this.transmitShareEvent2.emit(event);
  }
}
