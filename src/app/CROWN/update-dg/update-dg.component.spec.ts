import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDGComponent } from './update-dg.component';

describe('UpdateDGComponent', () => {
  let component: UpdateDGComponent;
  let fixture: ComponentFixture<UpdateDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
