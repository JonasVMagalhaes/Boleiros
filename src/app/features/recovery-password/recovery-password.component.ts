import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { RouteEnum } from '@enums/routes/route.enum';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.scss'
})
export class RecoveryPasswordComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly recoveryPasswordFormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ])
  });

  constructor(private readonly router: Router) {}

  goTo(path: RouteEnum): void {
    this.router.navigate([path]);
  }
}
