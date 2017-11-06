export class Tag {
  public id: string;
  public name: string;
  public count: number;

  from(tag: Tag): Tag {
    this.id = tag.id;
    this.name = tag.name;
    this.count = tag.count;
    return this;
  }
}