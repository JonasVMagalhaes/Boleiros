import { Component } from '@angular/core';

import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
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
