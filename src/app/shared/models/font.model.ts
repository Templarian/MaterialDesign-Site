import { FontVersion } from './fontVersion.model';

export class Font {
  public id: string;
  public name: string;
  public description: string;
  public prefix: string;
  public fontName: string;
  public fileName: string;
  public fontFamily: string;
  public fontWeight: string;
  public price: string;
  public versions: FontVersion[] = [];
  public iconCount: number;

  from(font: Font): Font {
    this.id = font.id;
    this.name = font.name;
    this.description = font.description;
    this.prefix = font.prefix;
    this.fontName = font.fontName;
    this.fontFamily = font.fontFamily;
    this.fontWeight = font.fontWeight;
    this.price = font.price;
    this.iconCount = font.iconCount;
    if (font.versions) {
      this.versions = font.versions.map(f => new FontVersion().from(f));
    }
    return this;
  }
}