import { Component, Output, EventEmitter } from '@angular/core';

import { Card } from './shared/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4 UI blocks overview';
  
  aCard : Card = {
    id: 0,
    title: 'A space invader',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet ante, quis euismod quam vestibulum non. Curabitur accumsan, lacus sit amet finibus tempus, quam nunc consectetur sapien, eu vulputate eros dolor sit amet leo. Suspendisse fermentum libero fermentum mi aliquet ullamcorper.',
    date: '01.01.2000',
    time: '12:00',
    place: 'Earth',
    image: '../assets/space-invader-press-start.jpg',
    share: 'complex collection of object coming soon....',
  }

  isFav : boolean = false;

  recordFav(cardId) {
    this.isFav = !this.isFav;
  }

}
