import { Routes } from '@angular/router';

import { RouteEnum } from '@enums/routes/route.enum';
import { publicRoutes } from '@routes/public-routes';
import { privateRoutes } from '@routes/private-routes';
import { publicRouteGuard } from '@guards/public-route.guard';
import { privateRouteGuard } from '@guards/private-route.guard';

export const routes: Routes = [
    {
        path: RouteEnum.EMPTY,
        canActivateChild: [publicRouteGuard],
        children: publicRoutes
    }, 
    {
        path: RouteEnum.EMPTY,
        canActivate: [privateRouteGuard],
        children: privateRoutes      
    }
];
