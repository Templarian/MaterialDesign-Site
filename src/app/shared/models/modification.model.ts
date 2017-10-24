import { Icon } from "app/shared/models/icon.model";
import { User } from "app/shared/models/user.model";
import { ModificationType } from "app/shared/enums/modificationType.enum";

export class Modification {

  public id: string;
  public modificaitonId: ModificationType;
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

}