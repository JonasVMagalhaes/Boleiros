import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from 'app/shared/shared.module';
import { RegisterGameComponent } from './register-game.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [RegisterGameComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
})
export class RegisterGameModule { }
