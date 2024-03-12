import { Injectable, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CacheImpl } from './models/cache-impl';
import { CacheStrategy } from './models/cache-strategy.enum';
import { CookieService } from './impls/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService implements CacheImpl, OnInit {
  @Input({ required: true }) strategy: CacheStrategy;

  private impl: CacheImpl;

  constructor(private readonly cookieService: CookieService) {}

  ngOnInit(): void {
    this.defineStrategy();
  }

  save(): Observable<void> {
    return this.impl.save();
  }

  get(id: string): Observable<string> {
    return this.impl.get(id);
  }

  update(data: string): Observable<void> {
    return this.impl.update(data);
  }
  
  delete(id: string): Observable<void> {
    throw this.impl.delete(id);
  }

  private defineStrategy(): void {
    switch(this.strategy) {
      case CacheStrategy.COOKIE:
        this.impl = this.cookieService;
    }
  }
}

