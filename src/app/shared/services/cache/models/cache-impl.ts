import { Observable } from "rxjs";

export abstract class CacheImpl {
    abstract save(): Observable<void>;
    abstract get(id: string): Observable<string>;
    abstract update(data: string): Observable<void>;
    abstract delete(id: string): Observable<void>;
}
