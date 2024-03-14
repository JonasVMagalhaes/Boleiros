import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HttpClientMock } from '@assets/mocks/http-client-mock';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HttpClient,
      useClass: HttpClientMock
    }
  ]
})
export class HttpClientAdapter { }
