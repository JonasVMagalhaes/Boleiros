import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';

import { Observable, map, of, switchMap, tap } from 'rxjs';

import { Primitive } from '@enums/primitives/primitive.enum';
import { PrimitiveSignInResponse } from '@models/primitives/sign-in/sign-in-response.interface';
import { SignInterceptorsService } from '../interceptors/sign-interceptor';
import { Auth } from '../dtos/auth';
import { LoginForm } from '@features/login/models/login-form.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly authenticated: Signal<boolean>;

  constructor(private readonly httpClient: HttpClient,
              private readonly signInterceptorsService: SignInterceptorsService) {}

    signIn(credencials: FormGroup<LoginForm>): Observable<Auth> {
        return of(credencials)
            .pipe(
              map(Auth.toDto),
              switchMap((credentialsDto) => this.httpClient.post<PrimitiveSignInResponse>(Primitive.SIGN, credentialsDto)),
              map(Auth.fromDto),
              tap({
                  next: (response) => this.signInterceptorsService.executeSuccess(response)
              }),
        );
    }
}
