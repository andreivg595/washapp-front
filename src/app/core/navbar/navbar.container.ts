import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonColor } from 'src/app/shared/components/ui/button/button.component';
import { select, Store } from '@ngrx/store';
import { getIsAuthenticated } from 'src/app/core/auth/store/selectors/auth.selectors';
import { logOut } from '../auth/store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.scss'],
})
export class NavbarContainer implements OnInit {
  readonly isAuthenticated$ = this.store.pipe(select(getIsAuthenticated));
  readonly ButtonColor = ButtonColor;
  items: MenuItem[] = [];

  constructor(private router: Router, private readonly store: Store<any>) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
      },
      {
        label: 'Services',
        disabled: true,
      },
      {
        label: 'About us',
        disabled: true,
      },
      {
        label: 'Options',
        disabled: true,
      },
      {
        label: 'Contact',
        disabled: true,
      },
    ];
  }

  home() {
    this.router.navigate(['/']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }

  logout() {
    this.store.dispatch(logOut());
    this.home();
  }
}
