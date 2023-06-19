import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechparnomComponent } from './rechparnom.component';

describe('RechparnomComponent', () => {
  let component: RechparnomComponent;
  let fixture: ComponentFixture<RechparnomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechparnomComponent]
    });
    fixture = TestBed.createComponent(RechparnomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
