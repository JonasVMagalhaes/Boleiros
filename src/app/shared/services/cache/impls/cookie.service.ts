import { Injectable } from '@angular/core';

import { CacheImpl } from '../models/cache-impl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieService implements CacheImpl {
    save(): Observable<void> {
        throw new Error('Method not implemented.');
    }

    get(id: string): Observable<string> {
        throw new Error('Method not implemented.');
    }

    update(data: string): Observable<void> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Observable<void> {
        throw new Error('Method not implemented.');
    }
}

