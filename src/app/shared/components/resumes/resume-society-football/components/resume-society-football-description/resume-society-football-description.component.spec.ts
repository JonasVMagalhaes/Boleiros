import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSocietyFootballDescriptionComponent } from './resume-society-football-description.component';

describe(ResumeSocietyFootballDescriptionComponent.name, () => {
  let component: ResumeSocietyFootballDescriptionComponent;
  let fixture: ComponentFixture<ResumeSocietyFootballDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSocietyFootballDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSocietyFootballDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
