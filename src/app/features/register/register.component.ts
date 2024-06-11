import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { RouteEnum } from '@enums/routes/route.enum';
import { FormValidator } from '@utils/form-validators/form-validators';
import { RouteUtilsService } from '@utils/route/route-utils';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly registerFormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.minLength(6),
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      FormValidator.passwordStrongValidator
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      FormValidator.confirmPasswordValidator('password')
    ])
  });

  constructor(private readonly routerUtils: RouteUtilsService) { }

  protected goTo(path: RouteEnum): void {
    this.routerUtils.goTo(path);
  }
}
