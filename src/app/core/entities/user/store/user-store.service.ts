import { Injectable } from '@angular/core';

import { User } from '@entities/user/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private data: User;

  constructor() { }
}
