import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDGComponent } from './delete-dg.component';

describe('DeleteDGComponent', () => {
  let component: DeleteDGComponent;
  let fixture: ComponentFixture<DeleteDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
