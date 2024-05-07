import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEVAComponent } from './navbar-eva.component';

describe('NavbarEVAComponent', () => {
  let component: NavbarEVAComponent;
  let fixture: ComponentFixture<NavbarEVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEVAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
