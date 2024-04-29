import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDGComponent } from './all-dg.component';

describe('AllDGComponent', () => {
  let component: AllDGComponent;
  let fixture: ComponentFixture<AllDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
