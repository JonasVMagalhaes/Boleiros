import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";

import { Observable, tap } from "rxjs";

export function authInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    if(request instanceof HttpRequest) {

    }
    
    return next(request).pipe(
        tap({
            next: (response: HttpEvent<unknown>) => response,
            error: (response: HttpErrorResponse) =>  response
        })
    );
  }