import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZidHabaComponent } from './zid-haba.component';

describe('ZidHabaComponent', () => {
  let component: ZidHabaComponent;
  let fixture: ComponentFixture<ZidHabaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZidHabaComponent]
    });
    fixture = TestBed.createComponent(ZidHabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
