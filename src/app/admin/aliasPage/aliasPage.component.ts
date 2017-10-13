import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';

@Component({
  selector: 'mdi-admin-alias-page',
  templateUrl: './aliasPage.component.html',
  styleUrls: ['./aliasPage.component.scss'],
  providers: [
    LoginService
  ]
})
export class AdminAliasPageComponent {

  constructor(
    private loginService: LoginService
  ) { }

  async ngOnInit() {
    await this.loginService.isAuthed();
    // Authed
    console.log('authed');
  }

  public selectIcon() {

  }

}