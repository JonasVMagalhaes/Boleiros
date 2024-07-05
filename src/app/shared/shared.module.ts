import { NgModule } from '@angular/core';

import { HttpClientAdapterModule } from '@adapters/http-client/http-client-adapter';
import { ComponentsModule } from '@components/components.module';
import { CacheService } from '@services/cache/cache.service';
import { EncryptionService } from '@services/encryption/encryption.service';
import { CheckUpdatesService } from '@services/sw-updates/check-updates.service';
import { MessageModule } from '@services/message/message.module';

@NgModule({
  imports: [
    HttpClientAdapterModule,
    MessageModule
  ],
  exports: [ComponentsModule],
  providers: [
    CacheService,
    EncryptionService,
    CheckUpdatesService
  ]
})
export class SharedModule { }
