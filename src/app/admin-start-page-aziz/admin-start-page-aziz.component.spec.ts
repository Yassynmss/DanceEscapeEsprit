import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStartPageAzizComponent } from './admin-start-page-aziz.component';

describe('AdminStartPageAzizComponent', () => {
  let component: AdminStartPageAzizComponent;
  let fixture: ComponentFixture<AdminStartPageAzizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStartPageAzizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStartPageAzizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
