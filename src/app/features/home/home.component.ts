import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeSocietyFootball } from '@components/resumes/models/resume-society-football.interface';
import { ResumeSports } from '@components/resumes/models/resume-sports.interface';

import { RouteEnum } from '@enums/routes/route.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly matchs: ResumeSports<ResumeSocietyFootball>[] = [
    {
      id: "1",
      homeTeam: {
        id: "",
        logo: "../../../../../assets/images/features-home-logo/logo 1.png",
        name: "Specter",
        score: 6
      },
      visitorTeam: {
        id: "",
        logo: "../../../../../assets/images/features-home-logo/logo 4.png",
        name: "Galáticos",
        score: 5,
      },
      winner: "Specter",
      datetime: new Date("06/11/2024")
    },
    {
      id: "2",
      homeTeam: {
        id: "",
        logo: "../../../../../assets/images/features-home-logo/logo 4.png",
        name: "Galáticos",
      },
      visitorTeam: {
        id: "",
        logo: "../../../../../assets/images/features-home-logo/logo 1.png",
        name: "Specter",
      },
      winner: "Specter",
      datetime: new Date("06/18/2024")
    },
    {
      id: "3",
      homeTeam: {
        id: "",
        logo: "../../../../../assets/images/features-home-logo/logo 1.png",
        name: "Specter",
      },
      visitorTeam: {
        id: "",
        logo: "../../../../../assets/images/features-home-logo/logo 4.png",
        name: "Galáticos",
      },
      winner: "Specter",
      datetime: new Date("06/25/2024")
    },
    {
      id: "4",
      homeTeam: {
        id: "",
        logo: "../../../../../assets/images/features-home-logo/logo 4.png",
        name: "Galáticos",
      },
      visitorTeam: {
        id: "",
        logo: "../../../../../assets/images/features-home-logo/logo 1.png",
        name: "Specter",
      },
      winner: "Specter",
      datetime: new Date("07/02/2024")
    }
  ];

  constructor(private readonly router: Router) {}

  goTo(path: RouteEnum): void {
    this.router.navigate([path]);
  }
}
