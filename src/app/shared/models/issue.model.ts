export class Issue {
  
  public user: string;
  public labels: string[];
  public title: string;
  public plus: number;
  public minus: number;
  public created: string;
  public updated: string;
  public comments: number;
  public milestone: number;
  public number: number;

  from(issue: Issue): Issue {
    this.user = issue.user;
    this.labels = issue.labels;
    this.title = issue.title;
    this.plus = issue.plus;
    this.minus = issue.minus;
    this.created = issue.created;
    this.updated = issue.updated;
    this.comments = issue.comments;
    this.milestone = issue.milestone;
    this.number = issue.number;
    return this;
  }

}