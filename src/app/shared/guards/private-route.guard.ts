import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { KeysCacheEnum } from '@enums/keys/keys-cache.enum';
import { RouteEnum } from '@enums/routes/route.enum';
import { CacheService } from '@services/cache/cache.service';
import { map, of, tap } from 'rxjs';

export const privateRouteGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const cacheService = inject(CacheService);
  const router = inject(Router);

  if (isPlatformBrowser(platformId)) {
    return cacheService.get(KeysCacheEnum.AUTH)
      .pipe(
        tap(key => !key && router.navigate([RouteEnum.LOGIN])),
        map(authenticated => Boolean(authenticated)),
      );
  } else {
    return of(false);
  }
};
