import { HttpClientAdapterModule } from '@adapters/http-client/http-client-adapter';
import { NgModule } from '@angular/core';


import { AuthEntityModule } from '@entities/auth/auth.module';
import { RegisterEntityModule } from '@entities/register/register.module';
import { TeamEntityModule } from '@entities/team/team.module';
import { UserEntityModule } from '@entities/user/user.module';

@NgModule({
  exports: [
    HttpClientAdapterModule,
    AuthEntityModule,
    RegisterEntityModule,
    TeamEntityModule,
    UserEntityModule,
  ]
})
export class CoreModule { }
