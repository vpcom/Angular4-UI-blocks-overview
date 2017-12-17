import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardActionComponent } from './card-action/card-action.component';
import { CardFavComponent } from './card-fav/card-fav.component';
import { CardShareCollectionComponent } from './card-share-collection/card-share-collection.component';
import { CardShareComponent } from './card-share/card-share.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardActionComponent,
    CardFavComponent,
    CardShareCollectionComponent,
    CardShareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
