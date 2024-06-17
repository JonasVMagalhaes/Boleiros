import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

import { HttpClientMock } from '@assets/mocks/http-client-mock';

@NgModule({ declarations: [], imports: [CommonModule], providers: [
        provideHttpClient(
            withFetch(),
            withInterceptorsFromDi()
        ),
        {
            provide: HttpClient,
            useClass: HttpClientMock
        },
    ] })
export class HttpClientAdapterModule { }
