import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = true;
  redirectUrl: string;
  constructor(private router: Router) { }
  // TODO:模拟登录登出
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1500),
      tap(val => this.isLogin = true)
    );
  }
  logout(): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
      tap(val => this.isLogin = false)
    );
  }

}
