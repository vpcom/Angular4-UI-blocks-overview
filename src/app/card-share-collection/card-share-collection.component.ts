import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-share-collection',
  templateUrl: './card-share-collection.component.html',
  styleUrls: ['./card-share-collection.component.css']
})
export class CardShareCollectionComponent implements OnInit {

  @Input() share: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
