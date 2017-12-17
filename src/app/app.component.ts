import { Component, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';

import { Card } from './shared/card';
import { ShareItem } from './shared/share-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4 UI blocks overview';
  
  aShareItem : ShareItem = {
    id: 0,
    name: 'facebook',
    imageSrc: '../assets/facebook.png',
    shareLink: 'fakelink.com',
  }

  shareCollection : ShareItem[] = [ this.aShareItem ];

  aCard : Card = {
    id: 0,
    title: 'A space invader',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet ante, quis euismod quam vestibulum non. Curabitur accumsan, lacus sit amet finibus tempus, quam nunc consectetur sapien, eu vulputate eros dolor sit amet leo. Suspendisse fermentum libero fermentum mi aliquet ullamcorper.',
    date: '01.01.2000',
    time: '12:00',
    place: 'Earth',
    image: '../assets/space-invader-press-start.jpg',
    shareCollection: this.shareCollection,
    mainColor: '#64DD17',
    secondaryColor: '#CCFF90',
  }

  isFav : boolean = false;
  isShared : boolean = false;
  socialShare : Object = {};

  recordFav(cardId) {
    this.isFav = !this.isFav;
  }
  recordShare(shareName) {
    if (shareName in this.socialShare) {
      this.socialShare[shareName]++;
    } else {
      this.socialShare[shareName] = 1;
    }
  }

}
