import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCSPLComponent } from './about-cspl.component';

describe('AboutCSPLComponent', () => {
  let component: AboutCSPLComponent;
  let fixture: ComponentFixture<AboutCSPLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCSPLComponent]
    });
    fixture = TestBed.createComponent(AboutCSPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
