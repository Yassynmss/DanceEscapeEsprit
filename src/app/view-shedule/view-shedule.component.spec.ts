import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSheduleComponent } from './view-shedule.component';

describe('ViewSheduleComponent', () => {
  let component: ViewSheduleComponent;
  let fixture: ComponentFixture<ViewSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
