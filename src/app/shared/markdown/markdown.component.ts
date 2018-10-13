import { Component, Input, ElementRef, ViewChild, EventEmitter, Output } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { HighlightService } from './../../shared/highlight.service'

declare var Remarkable: any;

export class MarkdownReplace {
  constructor(
    public find: RegExp,
    public replace: (substring: string, ...args: any[]) => string,
    public render?: () => void
  ) { }
}

@Component({
  selector: 'markdown-component',
  template: `<div class="markdown" [innerHtml]="htmlData"></div>`,
  providers: [
    HighlightService
  ]
})
export class MarkdownComponent {
  htmlData: SafeHtml = null;
  private _content = '<p>Loading...</p>';
  @Input('replace') replace: MarkdownReplace[] = [];
  @Input('content') set content(value: string) {
    if (this._content != value) {
      this._content = value;
      this.render();
    }
  }
  @Output('render') renderEvent = new EventEmitter();
  get content(): string {
    return this._content;
  }
  constructor(
    private sanitizer: DomSanitizer,
    private highlightService: HighlightService
  ) { }

  remarkable = new Remarkable({
    html: true
  });

  render() {
    if (this.content == null) { return; }
    let html = this.remarkable.render(this.content);
    // Replace Various Items
    this.replace.forEach(o => {
      html = html.replace(o.find, o.replace);
    });
    // Render HTML
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(html);
    // Additional Rendering
    this.replace.forEach(o => {
      if (o.render != null) {
        o.render();
      }
    });
    // Code blocks
    setTimeout(() => {
      // let items = document.querySelectorAll('pre code');
      // for (var i = 0; i < items.length; i++) {
      //   hljs.highlightBlock(items[i]);
      // }
      this.highlightService.highlightAll();
      // Render
      this.renderEvent.emit();
    });
  }
}