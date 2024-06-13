import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { ButtonPrimaryDirective } from './components/button-primary.directive';
import { ButtonLinkDirective } from './components/button-link.directive';
import { ButtonSecondaryDirective } from './components/button-secondary.directive';
import { ButtonWarningDirective } from './components/button-warning.directive';
import { ButtonDangerDirective } from './components/button-danger.directive';
import { ButtonHelpDirective } from './components/button-help.directive';

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
