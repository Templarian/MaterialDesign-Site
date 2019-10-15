import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { UserService } from 'app/shared/user.service';
import { ModificationService } from 'app/shared/modification.service';
import { ModificationType } from 'app/shared/enums/modificationType.enum';
import { Router } from '@angular/router';
import { User } from 'app/shared/models/user.model';

@Component({
  selector: 'mdi-admin-profile-page',
  templateUrl: './profilePage.component.html',
  styleUrls: ['./profilePage.component.scss'],
  providers: [
    LoginService,
    UserService,
    ModificationService
  ]
})
export class AdminProfilePageComponent {

  public editUser: User = new User();

  public disabledAlias: boolean = true;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) {
    
  }

  async ngOnInit() {
    await this.loginService.isAuthed();
    // Authed
    console.log('authed');
    // Load Package
    this.loadUser();
  }

  goBack () {
    this.router.navigateByUrl('/admin/index')
  }

  async logout () {
    await this.loginService.logout();
  }

  async loadUser() {
    this.editUser = await this.userService.getAdminProfile();
  }

  async submitProfile() {
    this.editUser = await this.userService.updateAdminProfile(this.editUser);
    alert('Updated!');
  }

}