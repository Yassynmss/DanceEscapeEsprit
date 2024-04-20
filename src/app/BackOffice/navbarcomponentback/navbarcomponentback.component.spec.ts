import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcomponentbackComponent } from './navbarcomponentback.component';

describe('NavbarcomponentbackComponent', () => {
  let component: NavbarcomponentbackComponent;
  let fixture: ComponentFixture<NavbarcomponentbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcomponentbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcomponentbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
