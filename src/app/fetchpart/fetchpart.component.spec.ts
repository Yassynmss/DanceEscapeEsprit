import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchpartComponent } from './fetchpart.component';

describe('FetchpartComponent', () => {
  let component: FetchpartComponent;
  let fixture: ComponentFixture<FetchpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
