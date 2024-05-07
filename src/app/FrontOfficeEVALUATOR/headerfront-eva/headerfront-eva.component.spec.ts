import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfrontEVAComponent } from './headerfront-eva.component';

describe('HeaderfrontEVAComponent', () => {
  let component: HeaderfrontEVAComponent;
  let fixture: ComponentFixture<HeaderfrontEVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderfrontEVAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderfrontEVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
