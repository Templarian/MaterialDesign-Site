export class Alias {

  constructor (
    public id?: string,
    public name?: string
  ) { }

  from(alias: Alias): Alias {
    this.id = alias.id;
    this.name = alias.name;
    return this;
  }

}