import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4 UI blocks overview';
  
  cardId: number = 0;
  cardTitle: string = 'A space invader';
  cardText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet ante, quis euismod quam vestibulum non. Curabitur accumsan, lacus sit amet finibus tempus, quam nunc consectetur sapien, eu vulputate eros dolor sit amet leo. Suspendisse fermentum libero fermentum mi aliquet ullamcorper.';
  cardDate: string = '01.01.2000';
  cardTime: string = '12:00';
  cardPlace: string = 'Earth';
  cardImage: string = '../assets/space-invader-press-start.jpg';
  cardShare: string = 'complex collection of object coming soon....';
}
