import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevoteComponent } from './updatevote.component';

describe('UpdatevoteComponent', () => {
  let component: UpdatevoteComponent;
  let fixture: ComponentFixture<UpdatevoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatevoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
