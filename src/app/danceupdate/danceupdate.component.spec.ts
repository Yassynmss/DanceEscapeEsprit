import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceupdateComponent } from './danceupdate.component';

describe('DanceupdateComponent', () => {
  let component: DanceupdateComponent;
  let fixture: ComponentFixture<DanceupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanceupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
