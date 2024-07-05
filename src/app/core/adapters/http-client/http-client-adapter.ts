import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { HttpClientMock } from '@assets/mocks/http-client-mock';

import { authInterceptor } from 'app/shared/interceptors/auth/auth-interceptor';
import { deviceHeaderConfigInterceptor } from 'app/shared/interceptors/device-header/device-header-config.interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        provideHttpClient(
            withFetch(),
            withInterceptors([
                deviceHeaderConfigInterceptor,
                authInterceptor
            ])
        ),
        {
            provide: HttpClient,
            useClass: HttpClientMock
        },
    ]
})
export class HttpClientAdapterModule { }
