import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueIndexByIdComponent } from './venue-index-by-id.component';

describe('VenueIndexByIdComponent', () => {
  let component: VenueIndexByIdComponent;
  let fixture: ComponentFixture<VenueIndexByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueIndexByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueIndexByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
