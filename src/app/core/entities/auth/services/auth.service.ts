import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map, tap } from 'rxjs';

import { Primitive } from '@enums/primitives/primitive.enum';
import { PrimitiveSignInResponse } from '@models/primitives/sign-in/sign-in-response.interface';
import { AuthCredentials } from '../models/auth-credentials.interface';
import { Auth } from '../models/auth-interface';
import { AuthDto } from '../dtos/auth-dto';
import { Authenticated } from '../models/authenticated-interface';
import { AuthenticatedDto } from '../dtos/authenticated-dto';
import { PrimitiveAuthResponse } from '@models/primitives/auth/auth-response.interface';
import { SignInterceptorsService } from '../interceptors/sign-interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient,
              private readonly signInterceptorsService: SignInterceptorsService) {}

  isAuthenticated(): Observable<Authenticated> {
    return this.httpClient.get<PrimitiveAuthResponse>(Primitive.AUTH)
      .pipe(
        map(response => AuthenticatedDto.fromDto(response))
      );
  }

  signIn(credencials: AuthCredentials): Observable<Auth> {
    return this.httpClient.post<PrimitiveSignInResponse>(Primitive.SIGN, AuthDto.toDto(credencials))
      .pipe(
        tap({
          next: (response) => this.signInterceptorsService.executeSuccess(response)
        }),
        map(response => AuthDto.fromDto(response))
      );
  }
}
