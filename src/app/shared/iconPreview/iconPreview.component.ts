import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from 'app/shared/models/icon.model';

@Component({
  selector: 'mdi-icon-preview',
  templateUrl: './iconPreview.component.html',
  styleUrls: ['./iconPreview.component.scss'],
})
export class IconPreviewComponent {
  constructor(
    private router: Router
  ) { }

  @Input('path') path: string = null;
  @Input('color') color: string = '#222';
  pointCount: number = 0;

  setPoints(path: string) {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setPoints(changes.path.currentValue);
  }
}