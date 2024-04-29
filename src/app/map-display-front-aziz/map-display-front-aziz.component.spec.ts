import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDisplayFrontAzizComponent } from './map-display-front-aziz.component';

describe('MapDisplayFrontAzizComponent', () => {
  let component: MapDisplayFrontAzizComponent;
  let fixture: ComponentFixture<MapDisplayFrontAzizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDisplayFrontAzizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapDisplayFrontAzizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
