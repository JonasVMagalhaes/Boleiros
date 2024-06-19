import { NgModule } from '@angular/core';

import { AvatarModule } from './avatar/avatar.module';
import { ButtonModule } from './button/button.module';
import { ComponentsFormModule } from './forms/components-form.module';
import { HintErrorModule } from './hint-error/hint-error.module';
import { PrivateHeaderModule } from './private-header/private-header.module';
import { PrivatyFooterModule } from './private-footer/private-footer.module';
import { ToastModule } from './toast/toast.module';
import { ResumesModule } from './resumes/resumes.module';
import { PlayerCardModule } from './player-card/player-card.module';

@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    ComponentsFormModule,
    HintErrorModule,
    PrivateHeaderModule,
    PrivatyFooterModule,
    ToastModule,
    ResumesModule,
    PlayerCardModule
  ]
})
export class ComponentsModule { }
