import { HttpClientAdapterModule } from '@adapters/http-client/http-client-adapter';
import { NgModule } from '@angular/core';


import { AuthModule } from '@entities/auth/auth.module';
import { TeamModule } from '@entities/team/team.module';
import { UserModule } from '@entities/user/user.module';

@NgModule({
  exports: [
    HttpClientAdapterModule,
    AuthModule,
    TeamModule,
    UserModule,
  ]
})
export class CoreModule { }
