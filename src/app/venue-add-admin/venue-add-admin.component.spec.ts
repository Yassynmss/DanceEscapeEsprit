import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueAddAdminComponent } from './venue-add-admin.component';

describe('VenueAddAdminComponent', () => {
  let component: VenueAddAdminComponent;
  let fixture: ComponentFixture<VenueAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueAddAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
