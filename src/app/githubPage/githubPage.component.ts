import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdi-github-page',
  templateUrl: './githubPage.component.html',
  styleUrls: ['./githubPage.component.scss']
})
export class GithubPageComponent {
  title: string = 'GitHub';

  name: string = 'account';
  path: string = 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z';
  url: string = `http://dev.materialdesignicons.com/api/preview/github?path=${this.path}&name=${this.name}`;

  update () {
    this.url = `http://dev.materialdesignicons.com/api/preview/github?path=${this.path}&name=${this.name}`;
  }

  ngOnInit() {
    this.update();
  }
}
