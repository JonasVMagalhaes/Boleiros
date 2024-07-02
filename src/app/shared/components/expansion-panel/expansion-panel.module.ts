import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpansionPanelComponent } from './expansion-panel.component';
import { ExpansionPanelDescriptionComponent } from './components/expansion-panel-body/expansion-panel-description.component';
import { ExpansionPanelHeaderComponent } from './components/expansion-panel-header/expansion-panel-header.component';

@NgModule({
    declarations: [
        ExpansionPanelComponent,
        ExpansionPanelHeaderComponent,
        ExpansionPanelDescriptionComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ExpansionPanelComponent,
        ExpansionPanelHeaderComponent,
        ExpansionPanelDescriptionComponent
    ]
})
export class ExpansionPanelModule { }
