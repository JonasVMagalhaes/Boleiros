import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RouteEnum } from '@enums/routes/route.enum';
import { FormValidator } from '@utils/form-validators/form-validators';
import { MessageService } from '@services/message/message.service';
import { RegisterForm } from './models/register-form.interface';
import { RegisterService } from '@entities/register/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  protected registerFormGroup: FormGroup<RegisterForm>;
  protected readonly RouteEnum = RouteEnum;

  constructor(private readonly router: Router,
              private readonly messageService: MessageService,
              private readonly registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  goTo(path: RouteEnum): void {
    this.router.navigate([path]);
  }

  register(): void {
    this.registerService.register(this.registerFormGroup)
      .subscribe({
        next: () => {
          this.messageService.toast('Usuário criado com sucesso');
          this.router.navigate([RouteEnum.HOME]);
        },
        error: (err: Error) => {
          this.messageService.toast(err.message);
        }
      });
  }

  private createFormGroup(): void {
    this.registerFormGroup = new FormGroup<RegisterForm>({
      username: new FormControl('', [
        Validators.minLength(3),
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
  }
}
