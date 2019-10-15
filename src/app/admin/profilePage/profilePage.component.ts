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

  resizedataURL(datas, wantedWidth, wantedHeight) {
    return new Promise(resolve => {
      var img = document.createElement('img');

      // When the event "onload" is triggered we can resize the image.
      img.onload = function() {        
        // We create a canvas and get its context.
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        // We set the dimensions at the wanted size.
        canvas.width = wantedWidth;
        canvas.height = wantedHeight;

        // We resize the image with the canvas method drawImage();
        ctx.drawImage(this as any, 0, 0, wantedWidth, wantedHeight);

        var dataURI = canvas.toDataURL();

        resolve(dataURI);
      };

      // We put the Data URI in the image's src attribute
      img.src = datas;
    });
  }

  updatedAvatar: string | null = null;
  handleFileSelect(evt) {
    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = ((theFile) => {
      return (e) => {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        //showing file converted to base64
        this.resizedataURL(`data:image/png;base64,${base64String}`, 100, 100).then(data => {
          this.updatedAvatar = data as string;
          this.updateProfileAvatar(data);
        });
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
  }

  updateProfileAvatar(data) {
    this.userService.updateAdminProfileAvatar(data).then(user => {
      this.editUser = user;
      this.updatedAvatar = null;
    });
  }

}