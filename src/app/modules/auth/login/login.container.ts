import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss'],
})
export class LoginContainer implements OnInit {
  employee = false;

  constructor() {}

  ngOnInit(): void {}

  loginEmployee() {
    this.employee = true;
  }
}
