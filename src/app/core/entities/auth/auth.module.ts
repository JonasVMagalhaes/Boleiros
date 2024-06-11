import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientAdapter } from '@adapters/http-client/http-client-adapter'
import { AuthService } from './services/auth.service';
import { CacheService } from '@services/cache/cache.service';
import { SignInterceptorsService } from './interceptors/sign-interceptor';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientAdapter,
    SharedModule
  ],
  providers: [
    AuthService,
    CacheService,
    SignInterceptorsService
  ]
})
export class AuthModule { }
