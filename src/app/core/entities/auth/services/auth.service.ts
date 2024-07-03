import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map, of, switchMap, tap } from 'rxjs';

import { Primitive } from '@enums/primitives/primitive.enum';
import { PrimitiveSignInResponse } from '@models/primitives/sign-in/sign-in-response.interface';
import { SignInterceptorsService } from '../interceptors/sign-interceptor';
import { Auth } from '../dtos/auth';
import { AuthCredentials } from '../models/auth-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient,
              private readonly signInterceptorsService: SignInterceptorsService) {}

  signIn(credencials: AuthCredentials): Observable<Auth> {
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
