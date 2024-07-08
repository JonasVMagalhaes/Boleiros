import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Auth } from "@entities/auth/dtos/auth";
import { KeysCacheEnum } from "@enums/keys/keys-cache.enum";
import { Primitive } from "@enums/primitives/primitive.enum";

import { CacheService } from "@services/cache/cache.service";
import { Observable, tap } from "rxjs";

export function authInterceptor(originalRequest: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const cacheService = inject(CacheService);
    const auth_token = JSON.parse(cacheService.getValue(KeysCacheEnum.AUTH)) as Auth;

    let request: HttpRequest<unknown>;

    if(authenticatedPrimitives().includes(originalRequest.url as Primitive)) {
        request = originalRequest.clone({
            headers: originalRequest.headers
                .set("auth_token", auth_token.accessToken)
        });
    } else {
        request = originalRequest.clone({
            headers: originalRequest.headers
        });
    }
    
    return next(request).pipe(
        tap({
            next: (response: HttpEvent<unknown>) => response,
            error: (response: HttpErrorResponse) =>  response
        })
    );
}

function authenticatedPrimitives() {
    return [
        Primitive.TESTE
    ];
}