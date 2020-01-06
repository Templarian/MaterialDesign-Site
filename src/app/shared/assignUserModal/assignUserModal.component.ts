import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from '../delay';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { Package } from '../models/package.model';

@Component({
  selector: 'mdi-assign-user-modal',
  templateUrl: './assignUserModal.component.html',
  providers: [
    UserService
  ]
})
export class AssignUserModal {
  @Input() user: User;
  @Input() package: Package;
  @ViewChild('userInput', { static: false }) userInput: ElementRef;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) {}

  public users: User[] = [];
  public selectedUser: User = null;

  async ngOnInit() {
    this.users = await this.userService.getAdminUsers(this.package.id);
    this.selectedUser = this.users.find(u => u.id == this.user.id);
    await delay();
    this.userInput.nativeElement.focus();
  }

  save() {
    this.activeModal.close(this.selectedUser);
  }
}