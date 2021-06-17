import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, switchMap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  canActivate() {
    return this.angularFireAuth.authState.pipe(
      take(1),
      switchMap(async (authState) => {
        if (authState?.email) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }
}
