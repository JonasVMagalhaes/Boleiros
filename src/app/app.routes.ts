import { Routes } from '@angular/router';

import { PrivateHeaderComponent } from '@components/private-header/private-header.component';
import { PrivateFooterComponent } from '@components/private-footer/private-footer.component';
import { RouteEnum } from '@enums/routes/route.enum';
import { publicRouteGuard } from '@guards/public-route.guard';
import { privateRouteGuard } from '@guards/private-route.guard';
import { publicRoutes } from '@routes/public-routes';
import { privateRoutes } from '@routes/private-routes';
import { PrivateRoutesComponent } from '@views/private-routes/private-routes.component';

export const routes: Routes = [
    {
        path: RouteEnum.EMPTY,
        canActivateChild: [publicRouteGuard],
        children: publicRoutes
    }, 
    {
        path: RouteEnum.EMPTY,
        component: PrivateRoutesComponent,
        canActivate: [privateRouteGuard],
        children: [
            { path: '', component: PrivateHeaderComponent, outlet: 'header' },
            ...privateRoutes,
            { path: '', component: PrivateFooterComponent, outlet: 'footer' }
        ]
    }
];
