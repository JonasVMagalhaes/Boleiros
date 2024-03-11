import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '@components/button/button.module';
import { InputModule } from '@components/forms/input/input.module';
import { RouteEnum } from '@enums/routes/route.enum';
import { RouteUtilsService } from '@utils/route/route-utils';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ],
  providers: [RouteUtilsService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  protected readonly RouteEnum = RouteEnum;
  protected readonly registerFormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private readonly routerUtils: RouteUtilsService) {}

  protected goTo(path: RouteEnum): void {
    this.routerUtils.goTo(path);
  }
}
