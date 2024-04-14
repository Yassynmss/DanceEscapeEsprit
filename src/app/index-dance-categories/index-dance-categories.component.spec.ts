import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDanceCategoriesComponent } from './index-dance-categories.component';

describe('IndexDanceCategoriesComponent', () => {
  let component: IndexDanceCategoriesComponent;
  let fixture: ComponentFixture<IndexDanceCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDanceCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexDanceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
