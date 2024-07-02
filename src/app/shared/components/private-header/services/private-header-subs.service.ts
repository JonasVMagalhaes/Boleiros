import { Injectable, Signal, signal } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PrivateHeaderSubsService {
    readonly titleSub: Signal<string> = signal("Home");
}
