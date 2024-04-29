import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancersGroupsDashboardComponent } from './dancers-groups-dashboard.component';

describe('DancersGroupsDashboardComponent', () => {
  let component: DancersGroupsDashboardComponent;
  let fixture: ComponentFixture<DancersGroupsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancersGroupsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DancersGroupsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
