import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDemoComponent } from './faq-demo.component';

describe('FaqDemoComponent', () => {
  let component: FaqDemoComponent;
  let fixture: ComponentFixture<FaqDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqDemoComponent]
    });
    fixture = TestBed.createComponent(FaqDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
