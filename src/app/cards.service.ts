import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Card } from './shared/card';

@Injectable()
export class CardsService {

  private CardsURL: string = '../assets/cards.json';

  constructor(private http: Http) { }

  getCards(): Promise<Card[]> {
    return this.http
      .get(this.CardsURL)
      .toPromise()
      .then((response) => {
        return response.json().data as Card[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
