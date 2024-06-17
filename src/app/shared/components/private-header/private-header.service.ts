import { Injectable } from "@angular/core";

import { PrivateHeaderSubsService } from "./services/private-header-subs.service";

@Injectable({
    providedIn: 'root'
})
export class PrivateHeaderService {
    constructor(private readonly privateHeaderSubsService: PrivateHeaderSubsService) { }

    get subs(): PrivateHeaderSubsService {
        return this.privateHeaderSubsService;
    }
}
