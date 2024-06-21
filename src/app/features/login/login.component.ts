import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InputType } from '@components/forms/input/models/input-type.interface';
import { ToastService } from '@components/toast/services/toast.service';
import { AuthCredentials } from '@entities/auth/models/auth-credentials.interface';
import { AuthService } from '@entities/auth/services/auth.service';
import { RouteEnum } from '@enums/routes/route.enum';
import { CustomValidators } from '@validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {  
  protected loginFormGroup: FormGroup<AuthCredentials>;
  protected readonly INPUT_TYPE = InputType;
  protected readonly RouteEnum = RouteEnum;

  constructor(private readonly router: Router,
              private readonly authService: AuthService,
              private readonly toastService: ToastService) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  goTo(path: RouteEnum): void {
    this.router.navigate([path]);
  }

  signIn(): void {
    this.authService.signIn(this.loginFormGroup.getRawValue())
      .subscribe({
        next: () => {
          this.toastService.toast({ summary: "Sucesso", message: "Authenticado com sucesso" });
          this.router.navigate([RouteEnum.HOME]);
        },
        error: (err: Error) => {
          this.toastService.toast({ summary: "Erro", message: err.message });
        }
      });
  }

  private createFormGroup(): void {
    this.loginFormGroup = new FormGroup<AuthCredentials>({
      username: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        CustomValidators.passwordValidator
      ]),
    });
  }
}
