import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueIndexFrontComponent } from './venue-index-front.component';

describe('VenueIndexFrontComponent', () => {
  let component: VenueIndexFrontComponent;
  let fixture: ComponentFixture<VenueIndexFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueIndexFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueIndexFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
