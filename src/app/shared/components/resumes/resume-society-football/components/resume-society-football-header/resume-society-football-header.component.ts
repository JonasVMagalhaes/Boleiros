import { Component, Input } from '@angular/core';
import { ResumeSocietyFootball } from '@components/resumes/models/resume-society-football.interface';

@Component({
  selector: 'app-resume-society-football-header',
  templateUrl: './resume-society-football-header.component.html',
  styleUrl: './resume-society-football-header.component.scss'
})
export class ResumeSocietyFootballHeaderComponent {
  @Input() match: ResumeSocietyFootball;
}
