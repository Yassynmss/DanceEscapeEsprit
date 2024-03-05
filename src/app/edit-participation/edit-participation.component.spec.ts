import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParticipationComponent } from './edit-participation.component';

describe('EditParticipationComponent', () => {
  let component: EditParticipationComponent;
  let fixture: ComponentFixture<EditParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParticipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
