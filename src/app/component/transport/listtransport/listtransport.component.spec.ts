import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtransportComponent } from './listtransport.component';

describe('ListtransportComponent', () => {
  let component: ListtransportComponent;
  let fixture: ComponentFixture<ListtransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
