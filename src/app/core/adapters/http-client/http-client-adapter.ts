import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { HttpClientMock } from '@assets/mocks/http-client-mock';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    provideHttpClient(withFetch()),
    {
      provide: HttpClient,
      useClass: HttpClientMock
    }
  ]
})
export class HttpClientAdapterModule { }
