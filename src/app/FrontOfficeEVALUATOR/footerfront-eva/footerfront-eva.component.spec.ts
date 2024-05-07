import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterfrontEVAComponent } from './footerfront-eva.component';

describe('FooterfrontEVAComponent', () => {
  let component: FooterfrontEVAComponent;
  let fixture: ComponentFixture<FooterfrontEVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterfrontEVAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterfrontEVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
