import { Component, Input } from '@angular/core';
import { Modification } from 'app/shared/models/modification.model';
import { ModificationService } from 'app/shared/modification.service';
import { ModificationType } from 'app/shared/enums/modificationType.enum';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from 'app/admin/services/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mdi-issues-page',
  templateUrl: './issuesPage.component.html',
  styleUrls: ['./issuesPage.component.scss'],
  providers: [
    ModificationService,
    LoginService
  ]
})
export class IssuesPageComponent {
  title: string = 'Issues';

  constructor(
    private modificationService: ModificationService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private loginService: LoginService,
    private modalService: NgbModal
  ) {}

  async loadMore() {
    
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

  friendlyReport (m: Modification) {
    return 'https://github.com/Templarian/MaterialDesign/issues/new?title=History&body=Reason%3A%0D%0A%0D%0A%0D%0A%5BView+History+Item%5D%28http%3A%2F%2Fmaterialdesignicons.com%2Fhistory%2F' + m.id + '%29';
  }
  
}
