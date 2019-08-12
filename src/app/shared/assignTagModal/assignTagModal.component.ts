import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from '../delay';
import { TagService } from '../tag.service';
import { Package } from '../models/package.model';
import { Tag } from '../models/tag.model';

@Component({
  selector: 'mdi-assign-tag-modal',
  templateUrl: './assignTagModal.component.html',
  providers: [
    TagService
  ]
})
export class AssignTagModal {
  @Input() package: Package;
  @ViewChild('inputTag') inputTag: ElementRef;

  constructor(
    public activeModal: NgbActiveModal,
    private tagService: TagService
  ) {}

  public tags: Tag[] = [];
  public selectedTag: Tag = null;

  async ngOnInit() {
    this.tags = await this.tagService.getTags(this.package.id);
    this.selectedTag = this.tags.find(u => u.id == this.tags[0].id);
    await delay();
    this.inputTag.nativeElement.focus();
  }

  save() {
    this.activeModal.close(this.selectedTag);
  }
}