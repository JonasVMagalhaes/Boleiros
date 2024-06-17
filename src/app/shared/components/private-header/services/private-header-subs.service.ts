import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PrivateHeaderSubsService {
    private readonly titleSub$: BehaviorSubject<string> = new BehaviorSubject("Home");

    public get title$(): Observable<string> {
        return this.titleSub$.asObservable();
    }

    public set title$(value: string) {
        this.titleSub$.next(value);
    }
}
