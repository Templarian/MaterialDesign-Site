import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from '../delay';
import { Alias } from '../models/alias.model';
import { AliasService } from '../alias.service';
import { Package } from '../models/package.model';

@Component({
  selector: 'mdi-assign-alias-modal',
  templateUrl: './assignAliasModal.component.html',
  providers: [
    AliasService
  ]
})
export class AssignAliasModal {
  @Input() package: Package;
  @ViewChild('inputAlias', { static: true }) inputAlias: ElementRef;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  public alias: String = '';

  async ngOnInit() {
    await delay();
    this.inputAlias.nativeElement.focus();
  }

  save() {
    this.activeModal.close(this.alias);
  }
}