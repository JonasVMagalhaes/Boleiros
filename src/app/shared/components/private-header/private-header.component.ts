import { Component } from '@angular/core';

import { PrivateHeaderService } from './private-header.service';
import { RouteEnum } from '@enums/routes/route.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {
  public readonly ROUTE_ENUM = RouteEnum;

  constructor(public readonly privateHeaderService: PrivateHeaderService,
              private readonly router: Router
  ) {}

  isRoute(route: RouteEnum): boolean {
    return this.router.url === `/${route}`;
  }
}
