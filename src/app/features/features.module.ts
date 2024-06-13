import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        SharedModule,
        LoginModule,
        HomeModule
    ],
    exports: [SharedModule]
})
export class FeaturesModule { }
