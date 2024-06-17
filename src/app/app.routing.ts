import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { RouteEnum } from '@enums/routes/route.enum';
import { PublicRoutesComponent } from '@features/public-routes/public-routes.component';
import { PrivateRoutesComponent } from '@features/private-routes/private-routes.component';
import { publicRouteGuard } from '@guards/public-route.guard';
import { privateRouteGuard } from '@guards/private-route.guard';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild([
            {
                path: RouteEnum.EMPTY,
                component: PublicRoutesComponent,
                loadChildren: () => import('@features/public-routes/public-routes.module').then(m => m.PublicRoutesModule),
                canActivateChild: [publicRouteGuard]
            }, 
            {
                path: RouteEnum.EMPTY,
                component: PrivateRoutesComponent,
                loadChildren: () => import('@features/private-routes/private-routes.module').then(m => m.PrivateRoutesModule),
                canActivate: [privateRouteGuard]
            }
        ]),
        SharedModule,
        CoreModule,
    ],
})
export class MainRoutesModule { }
