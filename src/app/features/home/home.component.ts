import { Component } from '@angular/core';
import { ResumeSocietyFootball } from '@components/resumes/models/resume-society-football.interface';
import { ResumeSports } from '@components/resumes/models/resume-sports.interface';

import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly matchs: ResumeSports<ResumeSocietyFootball>[] = [
    {
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

  constructor(private readonly routeUtils: RouteUtilsService) {}

  goTo(path: RouteEnum): void {
    this.routeUtils.goTo(path);
  }
}
