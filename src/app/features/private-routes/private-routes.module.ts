import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrivateRoutesComponent } from './private-routes.component';
import { SharedModule } from 'app/shared/shared.module';
import { PrivateHeaderModule } from '@components/private-header/private-header.module';
import { privateRoutes } from '@routes/private-routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [PrivateRoutesComponent],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(privateRoutes),
        SharedModule,
        PrivateHeaderModule
    ],
})
export class PrivateRoutesModule { }
