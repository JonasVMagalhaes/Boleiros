import { Component, signal } from '@angular/core';

import { OpenCloseExpansionPanelAnimation } from './animations/open-close-expansion-panel-animation';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  animations: [OpenCloseExpansionPanelAnimation.get()]
})
export class ExpansionPanelComponent {
  readonly showDescription = signal(false);

  toggleDescription(): void {
    this.showDescription.update(show => !show);
  }
}
