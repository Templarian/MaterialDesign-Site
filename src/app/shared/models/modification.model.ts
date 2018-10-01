import { Icon } from "app/shared/models/icon.model";
import { User } from "app/shared/models/user.model";
import { ModificationType } from "app/shared/enums/modificationType.enum";

export class Modification {

  public id: string;
  public modificationId: ModificationType;
  public packageId: string;
  public user: User;
  public icon: Icon;
  public iconNameBefore: string;
  public iconNameAfter: string;
  public iconDataBefore: string;
  public iconDataAfter: string;
  public text: string;
  public date: Date;
  public issue: number;

  constructor (
  ) { }

  from(modification: Modification): Modification {
    this.id = modification.id;
    this.modificationId = modification.modificationId;
    this.packageId = modification.packageId;
    this.user = new User().from(modification.user);
    this.icon = new Icon().from(modification.icon);
    this.iconNameBefore = modification.iconNameBefore;
    this.iconNameAfter = modification.iconNameAfter;
    this.iconDataBefore = modification.iconDataBefore;
    this.iconDataAfter = modification.iconDataAfter;
    this.text = modification.text;
    this.date = modification.date;
    this.issue = modification.issue;
    return this;
  }

}