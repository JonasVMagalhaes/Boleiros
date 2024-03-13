import { Observable } from "rxjs";

export abstract class CacheImpl {
    abstract save(id: string, value: string): Observable<void>;
    abstract get(id: string): Observable<string>;
    abstract update(id: string, data: string): Observable<void>;
    abstract delete(id: string): Observable<void>;
}
