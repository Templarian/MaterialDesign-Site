import { Component, Input } from '@angular/core';

import { Icon } from 'app/shared/models/icon.model';

@Component({
  selector: 'mdi-icon-viewer',
  templateUrl: './iconViewer.component.html',
  styleUrls: ['./iconViewer.component.scss']
})
export class IconViewerComponent {
  @Input('icons') icons: Icon[];
}