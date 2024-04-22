import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueAdminAzizComponent } from './venue-admin-aziz.component';

describe('VenueAdminAzizComponent', () => {
  let component: VenueAdminAzizComponent;
  let fixture: ComponentFixture<VenueAdminAzizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueAdminAzizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueAdminAzizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
