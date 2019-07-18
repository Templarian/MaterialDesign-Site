export class FontVersion {
  public id: string;
  public major: number;
  public minor: number;
  public patch: number;
  public iconCount: number;
  public description: string;
  public date: Date;
  public released: boolean;

  from(font: FontVersion): FontVersion {
    this.id = font.id;
    this.major = font.major;
    this.minor = font.minor;
    this.patch = font.patch;
    this.iconCount = font.iconCount;
    this.description = font.description;
    this.date = new Date(font.date);
    this.released = font.released;
    return this;
  }
}