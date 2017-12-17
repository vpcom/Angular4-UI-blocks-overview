import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardActionComponent } from './card-action/card-action.component';
import { CardFavComponent } from './card-fav/card-fav.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardActionComponent,
    CardFavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
