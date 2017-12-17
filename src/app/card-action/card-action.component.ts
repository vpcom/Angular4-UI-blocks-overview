import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.css']
})
export class CardActionComponent implements OnInit {

  @Input() id: number = -1;
  @Input() share: string = '';

  @Output() transmitFavEvent2 : EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  emitFavEvent2(event) {
    this.transmitFavEvent2.emit(event);
  }
}
