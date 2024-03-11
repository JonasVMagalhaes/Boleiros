import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { RouteEnum } from "@enums/routes/route.enum";

@Injectable()
export class RouteUtilsService {
    constructor(private readonly router: Router) {}

    goTo(path: RouteEnum): void {
        this.router.navigate([path]);
    }
}