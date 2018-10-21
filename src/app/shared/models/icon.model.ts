import { IconHelpers } from "app/shared/models/icon.helpers";
import { Alias } from "app/shared/models/alias.model";
import { User } from "app/shared/models/user.model";
import { Tag } from "app/shared/models/tag.model";

export class Icon extends IconHelpers {

  public id: string = null;
  public packageId: string = null
  public baseIconId: string = null;
  public name: string = null;
  public description: string = null;
  public data: string = null;
  public user: User = null;
  public aliases: Alias[] = [];
  public tags: Tag[] = [];

  constructor(name?: string, data?: string) {
    super();

    this.name = name;
    this.data = data;
  }

  from(icon: Icon): Icon {
    this.id = icon.id;
    this.packageId = icon.packageId;
    this.baseIconId = icon.baseIconId;
    this.name = icon.name;
    this.description = icon.description;
    this.data = icon.data;
    this.user = new User().from(icon.user);
    this.aliases = icon.aliases.map(a => new Alias().from(a));
    this.tags = icon.tags.map(t => new Tag().from(t));
    return this;
  }

  addAlias(alias: Alias) { super.addAlias(alias); }
  addTag(tag: Tag) { super.addTag(tag); }
  getPointCount() { return super.getPointCount(); }
  async getGitHubPreview(isWorkInProgress: boolean, action: string = 'none') {
    return await super.getGitHubPreview(isWorkInProgress, action);
  }
}