import { NgModule } from '@angular/core';

import { ButtonModule } from './button/button.module';
import { ComponentsFormModule } from './forms/components-form.module';
import { HintErrorModule } from './hint-error/hint-error.module';
import { MessageModule } from './message/message.module';

@NgModule({
  exports: [
    ButtonModule,
    ComponentsFormModule,
    HintErrorModule,
    MessageModule
  ]
})
export class ComponentsModule { }
