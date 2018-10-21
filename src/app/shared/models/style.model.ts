export class Style {
  public id: string;
  public name: string;
  public count: number = null;

  from(style: Style): Style {
    this.id = style.id;
    this.name = style.name;
    this.count = style.count;
    return this;
  }
}