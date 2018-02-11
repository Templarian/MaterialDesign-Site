import { Component, Input, ViewChild } from '@angular/core';
import { Icon } from 'app/shared/models/icon.model';

@Component({
  selector: 'mdi-github-page',
  templateUrl: './githubPage.component.html',
  styleUrls: ['./githubPage.component.scss']
})
export class GithubPageComponent {
  @ViewChild('canvas') canvas;
  title: string = 'GitHub Tools';

  name: string = 'account';
  path: string = 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z';
  oldPath: string = '';
  isWip: boolean = true;
  action: string = 'none';

  icon: Icon;

  private async getImage(imageUrl: string) {
    let img = document.createElement('img');
    return new Promise((resolve, reject) => {
      img.onload = () => { resolve(img); };
      img.onerror = () => { reject(); };
      img.src = imageUrl;
    });
  }

  async setAction(action: string) {
    this.action = action;
    this.update();
  }

  async setWip(isWip: boolean) {
    this.isWip = isWip;
    this.update();
  }

  async update() {
    let context = this.canvas.nativeElement.getContext('2d');
    this.icon = new Icon(this.name, this.path);
    let img = await this.icon.getGitHubPreview(this.isWip);
    let back;
    if (this.isWip) {
      back = await this.getImage('assets/resources/github-preview-blank-draft.png');
    } else {
      back = await this.getImage('assets/resources/github-preview-blank.png');
    }
    context.drawImage(back, 0, 0);
    context.drawImage(img, 0, 0);
    if (this.oldPath != '') {
      let svgPathElement = this.getIconSvgPath(this.oldPath, 0, 0, 10);
      const width = 325,
        height = 294;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.appendChild(svgPathElement)
      let imgShadow = await this.getPngFromSvg(svg);
      context.drawImage(imgShadow, 70, 10);
    }
    if (this.action == 'link') {
      let link = await this.getImage('assets/resources/github-preview-overlay-link.png');
      context.drawImage(link, 0, 0);
    } else if (this.action == 'download') {
      let download = await this.getImage('assets/resources/github-preview-overlay-download.png');
      context.drawImage(download, 0, 0);
    }
    if (this.isWip) {
      let wip = await this.getImage('assets/resources/github-preview-overlay-wip.png');
      context.drawImage(wip, 0, 0);
    }
  }

  private getIconSvgPath(data, x, y, scale): SVGPathElement {
    const ns = 'http://www.w3.org/2000/svg',
      path = document.createElementNS(ns, 'path');
    path.setAttribute('d', data);
    path.setAttribute('fill', 'rgba(0, 0, 0, 0.2)');
    path.setAttribute('stroke', '#000');
    path.setAttribute('stroke-width', '0.05');
    path.setAttribute('stroke-dasharray', '0.5 0.2');
    path.setAttribute('transform', `translate(${x},${y}) scale(${scale},${scale})`)
    return path;
  }

  private getPngFromSvg(svgElement: SVGSVGElement): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      var svg = new XMLSerializer().serializeToString(svgElement);
      var img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(svg)}`;
    });
  }

  async ngOnInit() {
    await this.update();
  }
}
