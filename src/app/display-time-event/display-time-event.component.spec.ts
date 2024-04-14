import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimeEventComponent } from './display-time-event.component';

describe('DisplayTimeEventComponent', () => {
  let component: DisplayTimeEventComponent;
  let fixture: ComponentFixture<DisplayTimeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTimeEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTimeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
