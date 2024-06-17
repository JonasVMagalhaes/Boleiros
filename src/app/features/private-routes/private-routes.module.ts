import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrivateRoutesComponent } from './private-routes.component';
import { privateRoutes } from '@routes/private-routes';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [PrivateRoutesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(privateRoutes),
        SharedModule
    ],
})
export class PrivateRoutesModule { }
