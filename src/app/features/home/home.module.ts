import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        SharedModule
    ],
})
export class HomeModule { }
