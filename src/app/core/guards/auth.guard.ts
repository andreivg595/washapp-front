import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getIsAuthenticated } from 'src/app/core/auth/store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly isAuthenticated$ = this.store.pipe(
    select(getIsAuthenticated)
  );

  constructor(private readonly store: Store<any>, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthenticated$.pipe(
      map((authUser) => {
        if (!authUser) {
          this.router.navigate(['/login']);
        }
        return authUser;
      })
    );
  }
}
