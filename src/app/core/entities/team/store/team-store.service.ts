import { Injectable } from '@angular/core';

import { Team } from '../models/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamStoreService {
  private data: Team;

  constructor() { }
}
