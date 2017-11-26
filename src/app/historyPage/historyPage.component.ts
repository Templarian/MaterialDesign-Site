import { Component, Input } from '@angular/core';
import { Modification } from 'app/shared/models/modification.model';
import { ModificationService } from 'app/shared/modification.service';
import { ModificationType } from 'app/shared/enums/modificationType.enum';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from 'app/admin/services/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mdi-history-page',
  templateUrl: './historyPage.component.html',
  styleUrls: ['./historyPage.component.scss'],
  providers: [
    ModificationService,
    LoginService
  ]
})
export class HistoryPageComponent {
  title: string = 'History';

  constructor(
    private modificationService: ModificationService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private loginService: LoginService,
    private modalService: NgbModal
  ) {}

  modificationsByDate: GroupByDateModification[] = [];
  modificationType = ModificationType;

  modificationTypes: SelectModfiicationType[] = [{
    name: 'News',
    modificationType: ModificationType.News,
    selected: true,
    className: 'history-news'
  }, {
    name: 'Webfont Published',
    modificationType: ModificationType.WebfontPublished,
    selected: true,
    className: 'history-webfont-published'
  }, {
    name: 'Icon Created',
    modificationType: ModificationType.IconCreated,
    selected: true,
    className: 'history-icon-created'
  }, {
    name: 'Icon Modified',
    modificationType: ModificationType.IconModified,
    selected: true,
    className: 'history-icon-modified'
  }, {
    name: 'Icon Renamed',
    modificationType: ModificationType.IconRenamed,
    selected: true,
    className: 'history-icon-renamed'
  }, {
    name: 'Icon Deleted',
    modificationType: ModificationType.IconDeleted,
    selected: true,
    className: 'history-icon-deleted'
  }, {
    name: 'Alias Created',
    modificationType: ModificationType.IconAliasCreated,
    selected: false,
    className: 'history-alias-created'
  }];

  getClassName (type: ModificationType) {
    return this.modificationTypes.filter(m => m.modificationType == type)[0].className;
  }

  isAuthed: boolean = false;

  async ngOnInit() {
    let mods: string[] = [];
    await this.toggle();
    this.isAuthed = await this.loginService.isAuthed();
  }

  issueNumber: number = null;

  async assignIssue(content, m: Modification) {
    this.issueNumber = m.issue;
    this.modalService.open(content).result.then((result) => {
      m.issue = result;
      this.modificationService.setAssignedIssue(m);
    }, (reason) => {
      // dismissed
    });
  }

  page: number = 0;
  currentDate: string = '';

  async toggle (modificationType?: SelectModfiicationType) {
    if (modificationType) {
      modificationType.selected = !modificationType.selected;
    }
    this.modificationsByDate = [];
    this.page = 0;
    this.currentDate = '';
    await this.loadMore();
  }

  async loadMore() {
    this.page++;
    let packageId = this.route.snapshot.data['package'];
    let mods = this.modificationTypes.filter(m => m.selected).map(m => m.modificationType);
    let modifications = await this.modificationService.getModificationsByType(packageId, mods, this.page, 100);
    for (let m of modifications) {
      if (this.currentDate != this.friendlyDate(new Date(m.date))) {
        this.currentDate = this.friendlyDate(new Date(m.date));
        this.modificationsByDate.push(new GroupByDateModification(this.currentDate));
      }
      m.text = m.text.replace(/`([^`]+)`/g, function (m, m1) {
        return `<code>${m1}</code>`;
      });
      this.modificationsByDate[this.modificationsByDate.length - 1].modifications.push(m);
    }
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

class SelectModfiicationType {
  public name: string;
  public modificationType: ModificationType;
  public selected: boolean = false;
  public className: string;
}

class GroupByDateModification {
  constructor (
    public date: string
  ) {}
  public modifications: Modification[] = [];
}