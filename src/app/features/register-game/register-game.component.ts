import { Component } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';

@Component({
  selector: 'app-register-game',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register-game.component.html',
  styleUrl: './register-game.component.scss'
})
export class RegisterGameComponent {
  protected readonly RouteEnum = RouteEnum;

  constructor(private readonly routeUtils: RouteUtilsService) { }

  goTo(path: RouteEnum): void {
    this.routeUtils.goTo(path);
  }

}
