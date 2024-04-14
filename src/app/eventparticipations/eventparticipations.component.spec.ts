import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventparticipationsComponent } from './eventparticipations.component';

describe('EventparticipationsComponent', () => {
  let component: EventparticipationsComponent;
  let fixture: ComponentFixture<EventparticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventparticipationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventparticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
