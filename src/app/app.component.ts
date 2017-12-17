import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { CardsService } from './cards.service';

import { Card } from './shared/card';
import { ShareItem } from './shared/share-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular4 UI blocks overview';

  cardsPromise: Promise<Card[]>;
  
  favCollection : Object = {};
  socialShare : Object = {};

  constructor( private cardsService: CardsService ) { }

  ngOnInit() {
    this.cardsPromise = this.cardsService.getCards();
  }

  recordFav(cardId) {
    if (cardId in this.favCollection) {
      this.favCollection[cardId] = !this.favCollection[cardId];
    } else {
      this.favCollection[cardId] = true;
    }
  }
  recordShare(shareName) {
    if (shareName in this.socialShare) {
      this.socialShare[shareName]++;
    } else {
      this.socialShare[shareName] = 1;
    }
  }

}
