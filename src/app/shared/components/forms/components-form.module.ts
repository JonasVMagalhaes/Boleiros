import { NgModule } from '@angular/core';

import { InputModule } from './input/input.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { SelectModule } from './select/select.module';
import { SwitchModule } from './switch/switch.module';

@NgModule({
  exports: [
    CheckboxModule,
    InputModule,
    SelectModule,
    SwitchModule
  ]
})
export class ComponentsFormModule { }
