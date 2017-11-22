import { Component, Input } from '@angular/core';
import { UserService } from 'app/shared/user.service';
import { User } from 'app/shared/models/user.model';

@Component({
  selector: 'mdi-contributor-badge',
  templateUrl: './contributorBadge.component.html',
  styleUrls: ['./contributorBadge.component.scss'],
  providers: [
    UserService
  ]
})
export class ContributorBadgeComponent {
  @Input('userId') userId: string;
  user: User = new User();

  constructor(
    private userService: UserService
  ) {
    this.user.name = '...';
    this.user.github = '...';
    this.user.twitter = '...';
  }

  async ngOnInit () {
    let users = await this.userService.getUsers();
    users.forEach(u => {
      if (u.id == this.userId) {
        this.user = u;
        return false;
      }
    });
  }
}
