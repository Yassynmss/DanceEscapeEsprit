import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceaddComponent } from './danceadd.component';

describe('DanceaddComponent', () => {
  let component: DanceaddComponent;
  let fixture: ComponentFixture<DanceaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanceaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
