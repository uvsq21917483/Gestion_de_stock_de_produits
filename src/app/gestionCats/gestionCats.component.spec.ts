import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gestionCatsComponent } from './gestionCats.component';

describe('RechParCatoComponent', () => {
  let component: gestionCatsComponent;
  let fixture: ComponentFixture<gestionCatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gestionCatsComponent]
    });
    fixture = TestBed.createComponent(gestionCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
