import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbootsComponent } from './cardboots.component';

describe('CardbootsComponent', () => {
  let component: CardbootsComponent;
  let fixture: ComponentFixture<CardbootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbootsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
