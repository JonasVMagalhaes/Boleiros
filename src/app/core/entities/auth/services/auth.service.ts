import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = true;

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
