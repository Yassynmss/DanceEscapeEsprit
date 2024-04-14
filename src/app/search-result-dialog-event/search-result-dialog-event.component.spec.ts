import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultDialogEventComponent } from './search-result-dialog-event.component';

describe('SearchResultDialogEventComponent', () => {
  let component: SearchResultDialogEventComponent;
  let fixture: ComponentFixture<SearchResultDialogEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultDialogEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultDialogEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
