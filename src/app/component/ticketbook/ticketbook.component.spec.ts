import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbookComponent } from './ticketbook.component';

describe('TicketbookComponent', () => {
  let component: TicketbookComponent;
  let fixture: ComponentFixture<TicketbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
