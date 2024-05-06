import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffTicketUtiComponent } from './aff-ticket-uti.component';

describe('AffTicketUtiComponent', () => {
  let component: AffTicketUtiComponent;
  let fixture: ComponentFixture<AffTicketUtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffTicketUtiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffTicketUtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
