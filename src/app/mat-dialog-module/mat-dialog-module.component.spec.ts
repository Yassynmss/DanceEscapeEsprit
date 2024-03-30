import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModuleComponent } from './mat-dialog-module.component';

describe('MatDialogModuleComponent', () => {
  let component: MatDialogModuleComponent;
  let fixture: ComponentFixture<MatDialogModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
