import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerriliKolchComponent } from './werrili-kolch.component';

describe('WerriliKolchComponent', () => {
  let component: WerriliKolchComponent;
  let fixture: ComponentFixture<WerriliKolchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WerriliKolchComponent]
    });
    fixture = TestBed.createComponent(WerriliKolchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
