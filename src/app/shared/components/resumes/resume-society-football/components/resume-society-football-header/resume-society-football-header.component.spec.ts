import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSocietyFootballHeaderComponent } from './resume-society-football-header.component';

describe(ResumeSocietyFootballHeaderComponent.name, () => {
  let component: ResumeSocietyFootballHeaderComponent;
  let fixture: ComponentFixture<ResumeSocietyFootballHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSocietyFootballHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSocietyFootballHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
