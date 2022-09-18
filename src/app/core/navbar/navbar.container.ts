import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonColor } from 'src/app/shared/components/ui/button/button.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.scss'],
})
export class NavbarContainer implements OnInit {
  items: MenuItem[] = [];
  readonly ButtonColor = ButtonColor;

  constructor(private router: Router) {}

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
}
