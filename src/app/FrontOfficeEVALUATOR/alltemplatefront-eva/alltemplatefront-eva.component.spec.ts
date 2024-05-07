import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltemplatefrontEVAComponent } from './alltemplatefront-eva.component';

describe('AlltemplatefrontEVAComponent', () => {
  let component: AlltemplatefrontEVAComponent;
  let fixture: ComponentFixture<AlltemplatefrontEVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltemplatefrontEVAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltemplatefrontEVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
