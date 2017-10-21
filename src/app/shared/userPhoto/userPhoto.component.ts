import { Component, Input, SimpleChanges } from '@angular/core';

import { UserService } from 'app/shared/user.service';

@Component({
  selector: 'mdi-user-photo',
  template: `<img *ngIf="base64 != null" [attr.src]="base64" />`,
  providers: [
    UserService
  ]
})
export class UserComponent  {
  @Input('userId') userId: string;

  base64: string = null;

  constructor(
    private userService: UserService
  ) { }

  async setUserId (userId: string) {
    let user = await this.userService.getUser(userId);
    this.base64 = user.base64;
  }

  data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
  name: string = 'error';

  ngOnChanges(changes: SimpleChanges){
    this.setUserId(changes.userId.currentValue);
  }
}
