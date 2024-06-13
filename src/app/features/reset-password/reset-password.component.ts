import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { RouteEnum } from '@enums/routes/route.enum';
import { FormValidator } from '@utils/form-validators/form-validators';
import { RouteUtilsService } from '@utils/route/route-utils';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly resetPasswordFormGroup = new FormGroup({
    password: new FormControl(null, [
      Validators.required,
      FormValidator.passwordStrongValidator
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      FormValidator.confirmPasswordValidator('password')
    ])
  });

  constructor(private readonly routeUtils: RouteUtilsService) {}

  goTo(path: RouteEnum): void {
    this.routeUtils.goTo(path);
  }
}
