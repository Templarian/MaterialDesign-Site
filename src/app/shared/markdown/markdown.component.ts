import { Component, Input, ElementRef, ViewChild } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare var Remarkable: any;
declare var hljs: any;

export class MarkdownReplace {
  constructor(
    public find: RegExp,
    public replace: (substring: string, ...args: any[]) => string
    ) {}
}

@Component({
  selector: 'markdown-component',
  template: `<div [innerHtml]="htmlData"></div>`
})
export class MarkdownComponent {
  htmlData: SafeHtml = null;
  private _content = '<p>Content not set.</p>';
  @Input('replace') replace: MarkdownReplace[] = [];
  @Input('content') set content(value: string) {
    if (this._content != value) {
      this._content = value;
      this.render();
    }
  }
  get content(): string {
      return this._content;
  }
  constructor(
    private sanitizer: DomSanitizer
    ){}

  remarkable = new Remarkable({
    html: true
  });

  render() {
    if (this.content == null) { return; }
    let html = this.remarkable.render(this.content)
    // Replace Various Items
    this.replace.forEach(o => {
      html = html.replace(o.find, o.replace);
    });
    // Render HTML
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(html);
    // Code blocks
    setTimeout(function () {
        let items = document.querySelectorAll('pre code');
        for (var i = 0; i < items.length; i++) {
        hljs.highlightBlock(items[i]);
        }
    });
  }
}