import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '@components/button/button.module';
import { InputModule } from '@components/forms/input/input.module';
import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ],
  providers: [
    RouteUtilsService
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly resetPasswordFormGroup = new FormGroup({
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  constructor(private readonly routeUtils: RouteUtilsService) {}

  goTo(path: RouteEnum): void {
    this.routeUtils.goTo(path);
  }
}
