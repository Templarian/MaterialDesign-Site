import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mdi-admin-login-page',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss'],
  providers: [LoginService]
})
export class AdminLoginPageComponent {

  user: string = '';
  pass: string = '';
  failed: boolean = false;
  isLoginDisabled: boolean = true;

  constructor (
    private loginService: LoginService,
    private router: Router
  ) {

  }

  async ngOnInit () {
    let isAuthed = await this.loginService.isAuthed();
    // Redirect
    if (isAuthed) {
      console.log('Already logged in... redirecting');
      this.router.navigateByUrl('/admin/index');
    }
  }

  async login () {
    let isAuth = await this.loginService.login(this.user, this.pass);
    if (isAuth) {
      this.router.navigateByUrl('/admin/index');
    } else {
      this.failed = true;
    }
  }

  validate () {
    this.isLoginDisabled = this.user.length == 0 || this.pass.length == 0;
  }

}
