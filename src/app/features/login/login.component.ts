import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@components/button/button.module';

import { InputModule } from '@components/forms/input/input.module';
import { ToastService } from '@components/message/toast/services/toast.service';
import { AuthModule } from '@entities/auth/auth.module';
import { AuthCredentials } from '@entities/auth/models/auth-credentials.interface';
import { AuthService } from '@entities/auth/services/auth.service';
import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    AuthModule
  ],
  providers: [
    RouteUtilsService,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly loginFormGroup = new FormGroup<AuthCredentials>({
    username: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required
    ]),
  });

  constructor(private readonly routeUtils: RouteUtilsService,
              private readonly authService: AuthService,
              public readonly toastService: ToastService) { }

  goTo(path: RouteEnum): void {
    this.routeUtils.goTo(path);
  }

  signIn(): void {
    this.authService.signIn(this.loginFormGroup.getRawValue())
      .subscribe(res => {
        this.toastService.add({
          message: 'Teste123',
          summary: 'Teste1234'
        })
        // this.routeUtils.goTo(RouteEnum.HOME);
      });
  }

}
