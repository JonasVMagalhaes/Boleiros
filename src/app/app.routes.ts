import { Routes } from '@angular/router';

import { RouteEnum } from '@enums/routes/route.enum';

export const routes: Routes = [
    {
        path: RouteEnum.EMPTY,
        loadChildren: () => import('./app.routing').then(m => m.MainRoutesModule),
    }
];
