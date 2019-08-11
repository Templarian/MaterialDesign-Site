import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mdi-confirm-modal',
  templateUrl: './confirmModal.component.html'
})
export class ConfirmModal {
  @Input() title: string;
  @Input() description: string;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  async ngOnInit() {
    
  }

  confirm() {
    this.activeModal.close();
  }
}