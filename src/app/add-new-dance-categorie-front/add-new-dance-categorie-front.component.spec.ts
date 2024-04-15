import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDanceCategorieFrontComponent } from './add-new-dance-categorie-front.component';

describe('AddNewDanceCategorieFrontComponent', () => {
  let component: AddNewDanceCategorieFrontComponent;
  let fixture: ComponentFixture<AddNewDanceCategorieFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDanceCategorieFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDanceCategorieFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
