import { Component, Input } from '@angular/core';
import { ResumeSocietyFootball } from '@components/resumes/models/resume-society-football.interface';

@Component({
  selector: 'app-resume-society-football-description',
  templateUrl: './resume-society-football-description.component.html',
  styleUrl: './resume-society-football-description.component.scss'
})
export class ResumeSocietyFootballDescriptionComponent {
  @Input() match: ResumeSocietyFootball;
}
