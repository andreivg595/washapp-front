import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonColor } from 'src/app/shared/components/ui/button/button.component';
import { select, Store } from '@ngrx/store';
import {
  getIsAuthenticated,
  getIsEmployee,
  getUser,
} from 'src/app/core/auth/store/selectors/auth.selectors';
import { logOut } from '../auth/store/actions/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.scss'],
})
export class NavbarContainer implements OnInit, OnDestroy {
  readonly isAuthenticated$ = this.store.pipe(select(getIsAuthenticated));
  readonly isEmployee$ = this.store.pipe(select(getIsEmployee));
  readonly user$ = this.store.pipe(select(getUser));
  readonly ButtonColor = ButtonColor;
  items: MenuItem[] = [];
  private isAuth = false;
  private isEmployee = false;
  private username: string | undefined;
  private subscription = new Subscription();

  constructor(private router: Router, private readonly store: Store<any>) {}

  ngOnInit(): void {
    this.subscription.add(
      this.isAuthenticated$.subscribe((r) => {
        this.isAuth = r;
      })
    );

    this.subscription.add(
      this.isEmployee$.subscribe((r) => {
        this.isEmployee = r;
      })
    );

    this.subscription.add(
      this.user$.subscribe((user) => {
        this.username = user?.username;
        this.setItems(this.isAuth, this.isEmployee, this.username);
      })
    );
  }

  setItems(isAuth?: boolean, isEmployee?: boolean, username?: string): void {
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
      {
        label: username,
        icon: 'pi pi-fw pi-user',
        visible: isAuth,
        items: [
          {
            label: 'Dashboard',
            routerLink: '/dashboard',
            visible: isEmployee,
          },
          {
            label: 'Shop',
            routerLink: '/shop',
          },
          {
            label: 'Orders',
            disabled: true,
            visible: !isEmployee,
          },
          {
            label: 'Logout',
            command: () => this.logout(),
          },
        ],
      },
    ];
  }

  home(): void {
    this.router.navigate(['/']);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  signUp(): void {
    this.router.navigate(['/sign-up']);
  }

  logout(): void {
    this.store.dispatch(logOut());
    this.home();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
