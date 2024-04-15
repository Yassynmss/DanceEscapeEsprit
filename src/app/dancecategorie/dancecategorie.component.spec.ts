import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancecategorieComponent } from './dancecategorie.component';

describe('DancecategorieComponent', () => {
  let component: DancecategorieComponent;
  let fixture: ComponentFixture<DancecategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancecategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DancecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
