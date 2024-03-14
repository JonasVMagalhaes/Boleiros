import { Injectable } from '@angular/core';

import { Auth } from '../models/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private data: Auth;

  constructor() { }
}
