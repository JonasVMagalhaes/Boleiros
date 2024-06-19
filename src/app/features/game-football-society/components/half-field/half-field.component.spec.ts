import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfFieldComponent } from './half-field.component';

describe('HalfFieldComponent', () => {
  let component: HalfFieldComponent;
  let fixture: ComponentFixture<HalfFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalfFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
