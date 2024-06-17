import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSocietyFootballComponent } from './resume-society-football.component';

describe('ResumeSocietyFootballComponent', () => {
  let component: ResumeSocietyFootballComponent;
  let fixture: ComponentFixture<ResumeSocietyFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSocietyFootballComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSocietyFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
