import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderofBoostComponent } from './headerof-boost.component';

describe('HeaderofBoostComponent', () => {
  let component: HeaderofBoostComponent;
  let fixture: ComponentFixture<HeaderofBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderofBoostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderofBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
