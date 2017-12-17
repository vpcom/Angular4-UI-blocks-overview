import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ShareItem } from '../shared/share-item';

@Component({
  selector: 'app-card-share-collection',
  templateUrl: './card-share-collection.component.html',
  styleUrls: ['./card-share-collection.component.css']
})
export class CardShareCollectionComponent implements OnInit {

  @Input() shareCollection: ShareItem[] = null;
  
  @Output() transmitShareEvent2 : EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  emitShareEvent(event) {
    this.transmitShareEvent2.emit(event);
  }

}
