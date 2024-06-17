import { Component } from '@angular/core';

import { PrivateHeaderService } from './private-header.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {
  constructor(public readonly privateHeaderService: PrivateHeaderService) {}
}
