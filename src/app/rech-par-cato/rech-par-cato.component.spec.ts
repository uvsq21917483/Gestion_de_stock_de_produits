import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechParCatoComponent } from './rech-par-cato.component';

describe('RechParCatoComponent', () => {
  let component: RechParCatoComponent;
  let fixture: ComponentFixture<RechParCatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechParCatoComponent]
    });
    fixture = TestBed.createComponent(RechParCatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
