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
    let img = await this.icon.getGitHubPreview(true);
    let back = await this.getImage('assets/resources/github-preview-blank.png');
    context.drawImage(back, 0, 0);
    context.drawImage(img, 0, 0);
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

  async ngOnInit() {
    await this.update();
  }
}
