import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.css']
})
export class CardActionComponent implements OnInit {

  @Input() id: number = -1;
  @Input() share: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
