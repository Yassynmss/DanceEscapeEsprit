import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStaffComponent } from './chart-staff.component';

describe('ChartStaffComponent', () => {
  let component: ChartStaffComponent;
  let fixture: ComponentFixture<ChartStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
