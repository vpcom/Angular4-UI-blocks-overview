import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id: number = -1;
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() date: string = '';
  @Input() time: string = '';
  @Input() place: string = '';
  @Input() image: string = '';
  @Input() share: string = '';

  constructor() { }

  ngOnInit() {
  }

}
