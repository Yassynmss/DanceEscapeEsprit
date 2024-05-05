import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartdetailsComponent } from './partdetails.component';

describe('PartdetailsComponent', () => {
  let component: PartdetailsComponent;
  let fixture: ComponentFixture<PartdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
