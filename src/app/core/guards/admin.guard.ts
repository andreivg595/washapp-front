import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getIsEmployee } from '../auth/store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  private readonly isEmployee$ = this.store.pipe(select(getIsEmployee));

  constructor(private readonly store: Store<any>, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isEmployee$.pipe(
      map((authEmployee) => {
        if (!authEmployee) {
          this.router.navigate(['/']);
        }
        return authEmployee;
      })
    );
  }
}
