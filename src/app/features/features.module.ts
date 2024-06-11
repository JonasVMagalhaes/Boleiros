import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { LoginModule } from './login/login.module';

@NgModule({
    imports: [
        SharedModule,
        LoginModule
    ],
    exports: [SharedModule]
})
export class FeaturesModule { }
