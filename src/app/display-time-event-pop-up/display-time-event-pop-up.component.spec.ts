import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimeEventPopUpComponent } from './display-time-event-pop-up.component';

describe('DisplayTimeEventPopUpComponent', () => {
  let component: DisplayTimeEventPopUpComponent;
  let fixture: ComponentFixture<DisplayTimeEventPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTimeEventPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTimeEventPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
