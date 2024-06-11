import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { ButtonPrimaryDirective } from './directives/button-primary.directive';
import { ButtonLinkDirective } from './directives/button-link.directive';
import { ButtonSecondaryDirective } from './directives/button-secondary.directive';
import { ButtonWarningDirective } from './directives/button-warning.directive';
import { ButtonDangerDirective } from './directives/button-danger.directive';
import { ButtonHelpDirective } from './directives/button-help.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonPrimaryDirective,
    ButtonSecondaryDirective,
    ButtonLinkDirective,
    ButtonWarningDirective,
    ButtonDangerDirective,
    ButtonHelpDirective
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    ButtonPrimaryDirective,
    ButtonSecondaryDirective,
    ButtonLinkDirective,
    ButtonWarningDirective,
    ButtonDangerDirective,
    ButtonHelpDirective
  ]
})
export class ButtonModule { }
