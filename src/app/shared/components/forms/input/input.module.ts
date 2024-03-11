import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input.component';
import { InputMaskDirective } from './input-mask.directive';

@NgModule({
    declarations: [
        InputComponent,
        InputMaskDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        InputComponent
    ]
})
export class InputModule { }
