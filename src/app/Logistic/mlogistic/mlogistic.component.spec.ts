import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlogisticComponent } from './mlogistic.component';

describe('MlogisticComponent', () => {
  let component: MlogisticComponent;
  let fixture: ComponentFixture<MlogisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlogisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlogisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
