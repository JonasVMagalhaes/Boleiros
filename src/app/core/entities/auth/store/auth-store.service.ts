import { Injectable } from '@angular/core';

import { KeysCacheEnum } from '@enums/keys/keys-cache.enum';
import { PrimitiveSignInResponse } from '@models/primitives/sign-in/sign-in-response.interface';
import { CacheService } from '@services/cache/cache.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private keyCache: KeysCacheEnum = KeysCacheEnum.AUTH;

  constructor(private readonly cacheService: CacheService) { }

  save(value: PrimitiveSignInResponse): void {
    this.cacheService.save(this.keyCache, JSON.stringify(value));
  }
}
