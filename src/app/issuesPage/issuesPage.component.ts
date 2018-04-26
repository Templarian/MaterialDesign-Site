import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from 'app/admin/services/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Issue } from 'app/shared/models/issue.model';
import { GitHubService } from 'app/shared/github.service';

@Component({
  selector: 'mdi-issues-page',
  templateUrl: './issuesPage.component.html',
  styleUrls: ['./issuesPage.component.scss'],
  providers: [
    GitHubService,
    LoginService
  ]
})
export class IssuesPageComponent {
  title: string = 'GitHub Issues';
  issues: Issue[];
  filter: string = null;
  rejectedTooltip: string = 'This icon may be too specific or outside of the scope of the icon set.';
  lowPriorityTooltip: string = 'This icon could be useful, but it fairly specific.';
  comingSoonTooltip: string = 'An approved design has been accepted.';
  highPriorityTooltip: string = 'This icon needs to be added soon.';
  pendingTooltip: string = 'Approved request, but still needs more work.';

  constructor(
    private gitHubService: GitHubService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private loginService: LoginService,
    private modalService: NgbModal
  ) {
    this.load(this.filter);
  }

  async load(filter: string) {
    this.filter = filter;
    this.issues = await this.gitHubService.getIssues();
    this.issues.forEach(issue => {
      issue.status = issue.labels.includes("Rejected")
        ? "Rejected" : issue.labels.includes("Low Priority") 
        ? "Low Priority" : issue.labels.includes("Contribution")
        ? "Coming Soon" : issue.labels.includes("High Priority")
        ? "High Priority" : "Pending"
    })
    if (filter) {
      this.issues = this.issues.filter(v => {
        return v.labels.includes(filter);
      })
    }
    this.issues.sort((a, b) => {
      return a.plus - b.plus;
    }).reverse();
  }

  friendlyDate (date: Date) {
    let months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return day[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  friendlyTime (dateStr: string) {
    let date = new Date(dateStr);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + '' + ampm;
    return strTime;
  }

  friendlyUrl (str: string) {
    return str.replace(' ', '-');
  }
  
}