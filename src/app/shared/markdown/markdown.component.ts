import { Component, Input } from "@angular/core";

declare var Remarkable: any;
declare var hljs: any;

class MarkdownReplace {
  constructor(
    public find: RegExp,
    public replace: (substring: string, ...args: any[]) => string
    ) {}
}

@Component({
  selector: 'markdown-component',
  template: `<div #md></div>`
})
export class MarkdownComponent {
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
  constructor(){}

  remarkable = new Remarkable({
    html: true
  });

  render() {
    if (this.content == null) { return; }
    let html = this.remarkable.render(this.content)
    // Angular4 parses single { } syntax.
    html = html.replace(/(^|[^{])\{($|[^\{])/g, "$1{{'{'}}$2")
               .replace(/(^|[^}])\}($|[^\}])/g, "$1{{'}'}}$2");
    this.replace.forEach(o => {
      html = html.replace(o.find, o.replace);
    });
    // Render HTML
    
    // Code blocks
    setTimeout(function () {
        let items = document.querySelectorAll('pre code');
        for (var i = 0; i < items.length; i++) {
        hljs.highlightBlock(items[i]);
        }
    }, 500);
  }
}