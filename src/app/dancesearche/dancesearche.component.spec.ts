import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancesearcheComponent } from './dancesearche.component';

describe('DancesearcheComponent', () => {
  let component: DancesearcheComponent;
  let fixture: ComponentFixture<DancesearcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancesearcheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DancesearcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
