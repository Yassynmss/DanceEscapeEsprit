import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDGComponent } from './stats-dg.component';

describe('StatsDGComponent', () => {
  let component: StatsDGComponent;
  let fixture: ComponentFixture<StatsDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsDGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
