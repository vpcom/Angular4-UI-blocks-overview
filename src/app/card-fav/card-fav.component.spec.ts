import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFavComponent } from './card-fav.component';

describe('CardFavComponent', () => {
  let component: CardFavComponent;
  let fixture: ComponentFixture<CardFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
