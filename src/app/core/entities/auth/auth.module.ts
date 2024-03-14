import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientAdapter } from '@adapters/http-client/http-client-adapter'
import { AuthService } from './services/auth.service';
import { CacheService } from '@services/cache/cache.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientAdapter
  ],
  providers: [
    AuthService,
    CacheService
  ]
})
export class AuthModule { }
