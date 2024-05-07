import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecomponentevaComponent } from './homecomponenteva.component';

describe('HomecomponentevaComponent', () => {
  let component: HomecomponentevaComponent;
  let fixture: ComponentFixture<HomecomponentevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecomponentevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecomponentevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
