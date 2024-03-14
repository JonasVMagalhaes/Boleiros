import { Observable } from "rxjs";

export abstract class CacheImpl {
    abstract save(key: string, value: string, daysToExpire: number): Observable<void>;
    abstract get(key: string): Observable<string>;
    abstract update(key: string, value: string, daysToExpire: number): Observable<void>;
    abstract delete(key: string): Observable<void>;
}
