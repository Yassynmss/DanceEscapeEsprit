import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDGComponent } from './create-dg.component';

describe('CreateDGComponent', () => {
  let component: CreateDGComponent;
  let fixture: ComponentFixture<CreateDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
