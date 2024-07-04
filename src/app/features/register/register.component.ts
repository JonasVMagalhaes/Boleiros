import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RouteEnum } from '@enums/routes/route.enum';
import { FormValidator } from '@utils/form-validators/form-validators';
import { MessageService } from '@services/message/message.service';
import { RegisterForm } from './models/register-form.interface';
import { RegisterService } from '@entities/register/services/register.service';
import { filter, of } from 'rxjs';
import { StringUtils } from '@utils/string/string-utils';
import { RegisterFormEnum } from '@enums/forms/register-form.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  protected registerFormGroup: FormGroup<RegisterForm>;
  protected readonly RouteEnum = RouteEnum;
  protected RegisterFormEnum = RegisterFormEnum;

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
    of(this.registerFormGroup)
      .pipe(
        filter(() => this.isFormValid()),
        filter(() => this.isPasswordEquals())
      )
      .subscribe(() => this.performRegister());
    
  }
  
  private performRegister() {
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
      [RegisterFormEnum.USERNAME]: new FormControl('', [
        Validators.minLength(3),
        Validators.required
      ]),
      [RegisterFormEnum.EMAIL]: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      [RegisterFormEnum.PASSWORD]: new FormControl(null, [
        Validators.required,
        FormValidator.passwordStrongValidator
      ]),
      [RegisterFormEnum.CONFIRM_PASSWORD]: new FormControl(null, [
        Validators.required,
        FormValidator.confirmPasswordValidator(RegisterFormEnum.PASSWORD)
      ])
    });
  }

  private isPasswordEquals(): boolean {
    if(StringUtils.isEqual(
      this.registerFormGroup.get(RegisterFormEnum.PASSWORD)?.value || '',
      this.registerFormGroup.get(RegisterFormEnum.CONFIRM_PASSWORD)?.value || '',
    )) {
      return true;
    } else {
      this.messageService.toast("As senhas não coincidem");
      return false;
    }
  }

  private isFormValid(): boolean {
    if(this.registerFormGroup.valid) {
      return true;
    } else {
      this.messageService.toast("Existem campos não preenchidos ou inválidos no formulário");
      return false;
    }
  }
}
