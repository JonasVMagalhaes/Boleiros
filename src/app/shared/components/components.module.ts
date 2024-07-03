import { NgModule } from '@angular/core';

import { AvatarModule } from './avatar/avatar.module';
import { ButtonModule } from './button/button.module';
import { ComponentsFormModule } from './forms/components-form.module';
import { HintErrorModule } from './hint-error/hint-error.module';
import { PrivateHeaderModule } from './private-header/private-header.module';
import { PrivatyFooterModule } from './private-footer/private-footer.module';
import { ResumesModule } from './resumes/resumes.module';
import { PlayerCardModule } from './player-card/player-card.module';
import { PlayerIconModule } from './player-icon/player-icon.module';
import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';

@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    ExpansionPanelModule,
    ComponentsFormModule,
    HintErrorModule,
    PrivateHeaderModule,
    PrivatyFooterModule,
    ResumesModule,
    PlayerCardModule,
    PlayerIconModule
  ]
})
export class ComponentsModule { }
