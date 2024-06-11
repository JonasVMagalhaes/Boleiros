import { NgModule } from '@angular/core';

import { ButtonModule } from './button/button.module';
import { ComponentsFormModule } from './forms/components-form.module';
import { HintErrorModule } from './hint-error/hint-error.module';
import { ToastModule } from './toast/toast.module';

@NgModule({
  exports: [
    ButtonModule,
    ComponentsFormModule,
    HintErrorModule,
    ToastModule
  ]
})
export class ComponentsModule { }
