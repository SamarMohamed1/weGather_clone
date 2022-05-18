import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestEventsComponent } from './newest-events.component';

describe('NewestEventsComponent', () => {
  let component: NewestEventsComponent;
  let fixture: ComponentFixture<NewestEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
