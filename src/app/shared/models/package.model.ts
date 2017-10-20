import { Icon } from "app/shared/models/icon.model";

export class Package {
  public iconCount: string;
  public icons: Icon[];

  constructor(
    public id: string,
    public name?: string
  ) {

  }
}