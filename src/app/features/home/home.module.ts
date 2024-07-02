import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';
import { HomeComponent } from './home.component';
import { MatAccordion } from '@angular/material/expansion';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatAccordion,
    ],
})
export class HomeModule { }
