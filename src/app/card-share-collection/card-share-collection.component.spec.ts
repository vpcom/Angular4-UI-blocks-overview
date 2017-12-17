import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShareCollectionComponent } from './card-share-collection.component';

describe('CardShareColectionComponent', () => {
  let component: CardShareCollectionComponent;
  let fixture: ComponentFixture<CardShareCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShareCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShareCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
