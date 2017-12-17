import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-fav',
  templateUrl: './card-fav.component.html',
  styleUrls: ['./card-fav.component.css']
})
export class CardFavComponent implements OnInit {

  @Input() id: number = -1;
  
  constructor() { }

  ngOnInit() {
  }

}
