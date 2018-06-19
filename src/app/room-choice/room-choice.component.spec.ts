import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomChoiceComponent } from './room-choice.component';

describe('RoomChoiceComponent', () => {
  let component: RoomChoiceComponent;
  let fixture: ComponentFixture<RoomChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
