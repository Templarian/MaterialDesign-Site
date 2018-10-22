import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from '../../shared/delay';
import { Icon } from '../models/icon.model';
import { Package } from '../models/package.model';

@Component({
  selector: 'mdi-select-icon-modal',
  templateUrl: './selectIconModal.component.html'
})
export class SelectIconModal {
  @Input() packageId: string;
  @Input() baseIconId: string = null;

  constructor(public activeModal: NgbActiveModal) {}

  public selectedPackage: Package = null;
  public selectedIcon: Icon = null;

  async ngOnInit() {
    this.selectedPackage = new Package(this.packageId);
    this.selectedIcon = new Icon();
    this.selectedIcon.id = this.baseIconId;
  }

  selectIcon() {

  }

  save($event) {
    this.activeModal.close(this.selectedIcon);
    if ($event) {
      $event.preventDefault();
    }
  }

  clear() {
    this.activeModal.close(null);
  }
}