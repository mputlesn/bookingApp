import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomChoice2Component } from './room-choice2.component';

describe('RoomChoice2Component', () => {
  let component: RoomChoice2Component;
  let fixture: ComponentFixture<RoomChoice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomChoice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomChoice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
