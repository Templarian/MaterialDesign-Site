import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'mdi-admin-login-page',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss'],
  providers: [LoginService]
})
export class AdminLoginPageComponent {

  user: string = '';
  pass: string = '';

  constructor (private loginService: LoginService) {

  }

  async login () {
    let isAuth = await this.loginService.login(this.user, this.pass);
    alert(isAuth);
  }

  goBack () {

  }

}
