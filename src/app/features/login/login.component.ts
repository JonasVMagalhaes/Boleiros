import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@components/button/button.module';

import { InputModule } from '@components/forms/input/input.module';
import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ],
  providers: [
    RouteUtilsService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly loginFormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private readonly routeUtils: RouteUtilsService) { }

  goTo(path: RouteEnum): void {
    this.routeUtils.goTo(path);
  }

}
