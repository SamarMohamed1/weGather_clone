import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSharingComponent } from './most-sharing.component';

describe('MostSharingComponent', () => {
  let component: MostSharingComponent;
  let fixture: ComponentFixture<MostSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostSharingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
