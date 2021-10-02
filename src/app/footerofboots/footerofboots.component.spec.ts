import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterofbootsComponent } from './footerofboots.component';

describe('FooterofbootsComponent', () => {
  let component: FooterofbootsComponent;
  let fixture: ComponentFixture<FooterofbootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterofbootsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterofbootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
