import { Component } from '@angular/core';

import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly RouteEnum = RouteEnum;

  constructor(private readonly routeUtils: RouteUtilsService) {}

  goTo(path: RouteEnum): void {
    this.routeUtils.goTo(path);
  }
}
