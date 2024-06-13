import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { AuthModule } from '@entities/auth/auth.module';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        AuthModule,
    ],
    exports: [LoginComponent]
})
export class LoginModule { }
