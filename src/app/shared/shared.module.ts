import { NgModule } from '@angular/core';

import { HttpClientAdapterModule } from '@adapters/http-client/http-client-adapter';
import { ComponentsModule } from '@components/components.module';
import { CacheService } from '@services/cache/cache.service';
import { EncryptionService } from '@services/encryption/encryption.service';
import { AuthInterceptor } from '@services/http-interceptor/interceptor.service';
import { CheckUpdatesService } from '@services/sw-updates/check-updates.service';
import { RouteUtilsService } from '@utils/route/route-utils';

@NgModule({
  imports: [HttpClientAdapterModule],
  exports: [
    ComponentsModule
  ],
  providers: [
    CacheService,
    EncryptionService,
    AuthInterceptor,
    CheckUpdatesService,
    RouteUtilsService
  ]
})
export class SharedModule { }
