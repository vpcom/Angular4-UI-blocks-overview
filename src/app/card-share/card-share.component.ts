import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ShareItem } from '../shared/share-item';

@Component({
  selector: 'app-card-share',
  templateUrl: './card-share.component.html',
  styleUrls: ['./card-share.component.css']
})
export class CardShareComponent implements OnInit {

  @Input() shareItem: ShareItem = null;
  @Output() transmitShareEvent : EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  shareInfo() {
    this.transmitShareEvent.emit(this.shareItem.name);
  }
}
