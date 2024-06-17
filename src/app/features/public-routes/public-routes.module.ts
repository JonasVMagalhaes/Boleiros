import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicRoutesComponent } from './public-routes.component';
import { SharedModule } from 'app/shared/shared.module';
import { publicRoutes } from '@routes/public-routes';
import { HttpClientAdapterModule } from '@adapters/http-client/http-client-adapter';

@NgModule({
    declarations: [PublicRoutesComponent],
    imports: [
        CommonModule,
        HttpClientAdapterModule,
        RouterModule.forChild(publicRoutes),
        SharedModule,
    ],
})
export class PublicRoutesModule { }
