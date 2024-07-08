import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CheckUpdatesModule } from '@services/sw-updates/check-updates.module';
import { CheckUpdatesService } from '@services/sw-updates/check-updates.service';
import { FeaturesModule } from '@features/features.module';
import { HttpClient } from '@angular/common/http';
import { Primitive } from '@enums/primitives/primitive.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CheckUpdatesModule,
    FeaturesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private readonly checkUpdatesService: CheckUpdatesService,
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.checkUpdatesService.checkVersions();
  }

  teste() {
    this.httpClient.get(Primitive.TESTE).subscribe(res => console.log(res))
  }
}
