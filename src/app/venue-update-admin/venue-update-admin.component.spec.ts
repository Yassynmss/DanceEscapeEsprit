import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueUpdateAdminComponent } from './venue-update-admin.component';

describe('VenueUpdateAdminComponent', () => {
  let component: VenueUpdateAdminComponent;
  let fixture: ComponentFixture<VenueUpdateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueUpdateAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueUpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
