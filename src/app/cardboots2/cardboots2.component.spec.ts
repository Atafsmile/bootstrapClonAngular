import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardboots2Component } from './cardboots2.component';

describe('Cardboots2Component', () => {
  let component: Cardboots2Component;
  let fixture: ComponentFixture<Cardboots2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardboots2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardboots2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
