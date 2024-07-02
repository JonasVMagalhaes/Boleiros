import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { InputComponent } from './input.component';
import { InputMaskDirective } from './input-mask.directive';

@NgModule({
    declarations: [
        InputComponent,
        InputMaskDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule
    ],
    exports: [
        InputComponent
    ]
})
export class InputModule { }
