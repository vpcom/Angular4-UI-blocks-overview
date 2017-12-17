import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-share',
  templateUrl: './card-share.component.html',
  styleUrls: ['./card-share.component.css']
})
export class CardShareComponent implements OnInit {

  @Input() share: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
