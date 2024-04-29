import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDGComponent } from './one-dg.component';

describe('OneDGComponent', () => {
  let component: OneDGComponent;
  let fixture: ComponentFixture<OneDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
