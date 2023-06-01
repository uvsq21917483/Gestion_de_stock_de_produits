import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeggemhaComponent } from './seggemha.component';

describe('SeggemhaComponent', () => {
  let component: SeggemhaComponent;
  let fixture: ComponentFixture<SeggemhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeggemhaComponent]
    });
    fixture = TestBed.createComponent(SeggemhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
