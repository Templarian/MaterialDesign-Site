import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { TagService } from 'app/shared/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mdi-admin-icons-page',
  templateUrl: './iconsPage.component.html',
  styleUrls: ['./iconsPage.component.scss'],
  providers: [
    LoginService,
    TagService
  ]
})
export class AdminIconsPageComponent {

  constructor (
    private loginService: LoginService,
    private tagService: TagService,
    private router: Router
  ) {}

  async ngOnInit () {
    await this.loginService.isAuthed();
    // Authed
    console.log('authed');
  }

  goBack () {
    this.router.navigateByUrl('/admin/index')
  }

  async logout () {
    await this.loginService.logout();
  }
  
  public selectIcon () {
    
  }

  addIcon () {

  }


}