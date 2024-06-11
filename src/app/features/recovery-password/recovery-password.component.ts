import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';
import { SharedModule } from 'app/shared/shared.module';

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

  constructor(private readonly routeUtils: RouteUtilsService) {}

  goTo(path: RouteEnum): void {
    this.routeUtils.goTo(path);
  }
}
