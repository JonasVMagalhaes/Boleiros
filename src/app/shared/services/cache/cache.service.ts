import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { CacheImpl } from './models/cache-impl';
import { CacheStrategy } from './models/cache-strategy.enum';
import { CookieService } from './impls/cookie.service';
import { EncryptionService } from '@services/encryption/encryption.service';
import { KeysCacheEnum } from '@enums/keys/keys-cache.enum';

@Injectable({
  providedIn: 'root'
})
export class CacheService implements CacheImpl {
  private impl: CacheImpl;

  constructor(private readonly cookieService: CookieService,
              private readonly encryptionService: EncryptionService) {
    this.defineStrategy();
  }

  setStrategy(strategy: CacheStrategy): this {
    this.defineStrategy(strategy);
    return this;
  }

  save(key: KeysCacheEnum, value: string, daysToExpire: number = 7): Observable<void> {
    return this.impl.save(this.encryptionService.encrypt(key), this.encryptionService.encrypt(value), daysToExpire);
  }

  get(key: KeysCacheEnum): Observable<string> {
    return this.impl.get(this.encryptionService.encrypt(key))
      .pipe(map(data => this.encryptionService.decrypt(data)));
  }

  update(key: KeysCacheEnum, value: string, daysToExpire: number = 7): Observable<void> {
    return this.impl.update(this.encryptionService.encrypt(key), this.encryptionService.encrypt(value), daysToExpire);
  }
  
  delete(key: KeysCacheEnum): Observable<void> {
    throw this.impl.delete(this.encryptionService.encrypt(key));
  }

  private defineStrategy(strategy: CacheStrategy = CacheStrategy.COOKIE): void {
    switch(strategy) {
      case CacheStrategy.COOKIE:
        this.impl = this.cookieService;
    }
  }
}

