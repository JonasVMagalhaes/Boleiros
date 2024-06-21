import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RouteEnum } from '@enums/routes/route.enum';

@Component({
  selector: 'app-register-game',
  templateUrl: './register-game.component.html',
  styleUrl: './register-game.component.scss'
})
export class RegisterGameComponent {
  protected readonly RouteEnum = RouteEnum;

  constructor(private readonly router: Router) { }

  goTo(path: RouteEnum): void {
    this.router.navigate([path]);
  }

}
