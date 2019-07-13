import '../polyfill/SVGPathSeg';
import { User } from "app/shared/models/user.model";
import { Alias } from "app/shared/models/alias.model";
import { Tag } from "app/shared/models/tag.model";

type IconError = {
  message: string;
  code: number;
};

export abstract class IconHelpers {

  constructor() {
    this.pathCommand = new RegExp("([a-z])["
      + this.spaces
      + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["
      + this.spaces
      + "]*,?["
      + this.spaces
      + "]*)+)", "ig");
    this.pathValues = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["
      + this.spaces + "]*,?["
      + this.spaces + "]*", "ig");
  }

  private spaces: string = "\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029";
  private pathCommand: RegExp;
  private pathValues: RegExp;

  public id: string = null;
  public name: string = null;
  public data: string = null;
  public user: User = null;
  public aliases: Alias[] = [];
  public tags: Tag[] = [];
  public pointCounttest: number = 0;
  public errors: IconError[] = [];

  private r(n: number) {
    return Math.round(n * 100) / 100;
  };

  private parse(path: string) {
    /// <summary>Taken from Snap Library</summary>
    var paramCounts = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
      data = [];
    path.replace(this.pathCommand, (a, b, c) => {
      var params = [],
        name = b.toLowerCase();
      c.replace(this.pathValues, function (a, b) {
        b && params.push(+b);
      });
      if (name == "m" && params.length > 2) {
        data.push([b].concat(params.splice(0, 2)));
        name = "l";
        b = b == "m" ? "l" : "L";
      }
      if (name == "o" && params.length == 1) {
        data.push([b, params[0]]);
      }
      if (name == "r") {
        data.push([b].concat(params));
      } else while (params.length >= paramCounts[name]) {
        data.push([b].concat(params.splice(0, paramCounts[name])));
        if (!paramCounts[name]) {
          break;
        }
      }
      return '';
    });
    return data;
  }

  getPointCount() {
    if (this.data != null) {
      return this.parse(this.data).length;
    }
    return 0;
  }

  getWithoutArcs() {

  }

  async getDataUrl() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.appendChild(this.getIconSvgPath(0, 0, 1));
    const png = await this.getPngFromSvg(svg);
    context.drawImage(png, 0, 0);
    return canvas.toDataURL();
  }

  addAlias(alias: Alias) {
    this.aliases.push(alias);
  }

  addTag(tag: Tag) {
    this.tags.push(tag);
  }

  private async getPngFromSvg(svgElement: SVGSVGElement): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      var svg = new XMLSerializer().serializeToString(svgElement);
      var img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(svg)}`;
    });
  }

  private getIconSvgPath(x, y, scale): SVGPathElement {
    const ns = 'http://www.w3.org/2000/svg',
      path = document.createElementNS(ns, 'path');
    path.setAttribute('d', this.data);
    path.setAttribute('transform', `translate(${x},${y}) scale(${scale},${scale})`)
    return path;
  }

  validName(): boolean {
    if (this.name === ''
      || this.name.match(/-$/)
      || this.name.match(/^-/)
      || this.name.match(/outline-/)
      || !(this.name.match(/^[a-z0-9-]+$/))) {
      return false;
    }
    return true;
  }

  async getGitHubPreview(isWorkInProgress: boolean, action: string = 'none'): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>(async (resolve, reject) => {
      let color: string = isWorkInProgress ? 'FFF' : '8B8B8B';
      let paths = [
        this.getIconSvgPath(11, 10, 1),
        this.getIconSvgPath(11, 44, 2),
        this.getIconSvgPath(70, 10, 10)
      ];
      const width = 325,
        height = 294;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      paths.forEach((path, i) => {
        path.setAttribute('d', this.data);
        path.setAttribute('fill', `#${color}`);
        svg.appendChild(path);
      });
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('transform', 'translate(11, 283)');
      text.setAttribute('fill', '#555');
      text.style.fontFamily = 'Segoe UI,Roboto,Arial';
      text.style.fontSize = '12pt';
      text.textContent = this.name;
      svg.appendChild(text);
      resolve(await this.getPngFromSvg(svg));
    });
  }

  convertToAbsolute(pathString) {
    var svgNS = "http://www.w3.org/2000/svg";
    var path = document.createElementNS(svgNS, "path") as SVGPathElement;
    path.setAttribute('d', pathString);
    var x0, y0, x1, y1, x2, y2, segs = path.pathSegList;
    for (var x = 0, y = 0, i = 0, len = segs.numberOfItems; i < len; ++i) {
        var seg = segs.getItem(i) as any,
            c = seg.pathSegTypeAsLetter;
        if (/[MLHVCSQTA]/.test(c)) {
            if ('x' in seg) x = seg.x;
            if ('y' in seg) y = seg.y;
        } else {
            if ('x1' in seg) x1 = x + seg.x1;
            if ('x2' in seg) x2 = x + seg.x2;
            if ('y1' in seg) y1 = y + seg.y1;
            if ('y2' in seg) y2 = y + seg.y2;
            if ('x' in seg) x += seg.x;
            if ('y' in seg) y += seg.y;
            switch (c) {
                case 'm': segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i); break;
                case 'l': segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i); break;
                case 'h': segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i); break;
                case 'v': segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i); break;
                case 'c': segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i); break;
                case 's': segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i); break;
                case 'q': segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i); break;
                case 't': segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i); break;
                case 'a': segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i); break;
                case 'z': case 'Z': x = x0; y = y0; break;
            }
        }
        // Record the start of a subpath
        if (c == 'M' || c == 'm') x0 = x, y0 = y;
    }
    return path.getAttribute('d');
  }

  curveToArc(x, y, part) {
    // Round
    function r(n) {
      return Math.round(n * 100) / 100;
    }
    // Is valid diagonal
    if (Math.abs(x - part[5]) == Math.abs(y - part[6])) {
        var radius = r(Math.abs(x - part[5]));
        var match = {
            exact: r(radius * 0.44773) == Math.abs(r(Math.abs(x == part[1] ? part[2] - y : part[1] - x) - radius)),
            rounded: r(radius * 0.45) == Math.abs(r(Math.abs(x == part[1] ? part[2] - y : part[1] - x) - radius))
        };
        if (!(match.exact || match.rounded)) { return part; }
        var c = { x: part[5] - x, y: part[6] - y };
        //console.log('x: ' + x + ' y: ' + y + ' r: ' + radius + '   ' + part.join() + ' match: ' + (match.exact || match.rounded));
        if ((part[1] < part[3] && part[2] > part[4] && x < part[5] && y > part[6]) ||
            (part[1] > part[3] && part[2] < part[4] && x > part[5] && y < part[6])) { // 1
            if (x == part[1]) {
                return ['A', radius, radius, 0, 0, 1, part[5], part[6]];
            } else {
                return ['A', radius, radius, 0, 0, 0, part[5], part[6]];
            }
        } else if ((part[1] < part[3] && part[2] < part[4] && x < part[5] && y < part[6]) ||
                   (part[1] > part[3] && part[2] > part[4] && x > part[5] && y > part[6])) {
            if (y == part[2]) {
                return ['A', radius, radius, 0, 0, 1, part[5], part[6]];
            } else {
                return ['A', radius, radius, 0, 0, 0, part[5], part[6]];
            }
        } else {
            console.log('error');
        }
    }
    return part;
  }

  optimize(parts) {
    // Round
    function r(n) {
      return Math.round(n * 100) / 100;
    }
    // Current
    var current = {
        x: 0,
        y: 0
    };
    for (var i = 0; i < parts.length; i++) {
        for (var j = 1; j < parts[i].length; j++) {
            parts[i][j] = r(parts[i][j]);
        }
        if (i == 0) { continue; }
        switch (parts[i - 1][0]) {
            case 'M':
            case 'L':
                current.x = parts[i - 1][1];
                current.y = parts[i - 1][2];
                if (parts[i][0] == 'L') {
                    if (parts[i][1] == parts[i - 1][1]) { // X axis equal so vertical line
                        parts[i] = ['V', parts[i][2]];
                    } else if (parts[i][2] == parts[i - 1][2]) { // Y axis equal so horizontal line
                        parts[i] = ['H', parts[i][1]];
                    }
                } else if (parts[i][0] == 'C') {
                    parts[i] = this.curveToArc(current.x, current.y, parts[i]);
                }
                break;
            case 'H':
                current.x = parts[i - 1][1];
                if (parts[i][0] == 'L') {
                    if (parts[i][1] == parts[i - 1][1]) { // X axis equal so vertical line
                        parts[i] = ['V', parts[i][2]];
                    }
                } else if (parts[i][0] == 'C') {
                    parts[i] = this.curveToArc(current.x, current.y, parts[i]);
                }
                break;
            case 'V':
                current.y = parts[i - 1][1];
                if (parts[i][0] == 'L') {
                    if (parts[i][2] == parts[i - 1][1]) { // Y axis equal so vertical line
                        parts[i] = ['H', parts[i][1]];
                    }
                } else if (parts[i][0] == 'C') {
                    parts[i] = this.curveToArc(current.x, current.y, parts[i]);
                }
                break;
            case 'C':
                current.x = parts[i - 1][5];
                current.y = parts[i - 1][6];
                if (parts[i][0] == 'L') {
                    if (parts[i][1] == parts[i - 1][5]) { // X axis equal so vertical line
                        parts[i] = ['V', parts[i][2]];
                    } else if (parts[i][2] == parts[i - 1][6]) { // Y axis equal so horizontal line
                        parts[i] = ['H', parts[i][1]];
                    }
                } else if (parts[i][0] == 'C') {
                    parts[i] = this.curveToArc(current.x, current.y, parts[i]);
                }
                break;
            case 'A':
                current.x = parts[i - 1][6];
                current.y = parts[i - 1][7];
                if (parts[i][0] == 'C') {
                    parts[i] = this.curveToArc(current.x, current.y, parts[i]);
                } else if (parts[i][0] == 'L') {
                    if (parts[i][2] == current.y) {
                        parts[i] = ['H', parts[i][1]];
                    } else if (parts[i][1] == current.x) {
                        parts[i] = ['V', parts[i][2]];
                    }
                }
                break;
        }
    }
    return parts;
  }

  partsToPath(parts) {
    var path = '';
    for (var i = 0; i < parts.length; i++) {
        switch (parts[i][0]) {
            case 'M':
            case 'L':
                path += parts[i][0] + parts[i][1] + ',' + parts[i][2];
                break;
            case 'V':
            case 'H':
                path += parts[i][0] + parts[i][1];
                break;
            case 'C':
                path += 'C' + parts[i][1] + ',' + parts[i][2] + ' '
                            + parts[i][3] + ',' + parts[i][4] + ' '
                            + parts[i][5] + ',' + parts[i][6];
                break;
            case 'A':
                path += 'A' + parts[i][1] + ',' + parts[i][2] + ' '
                            + parts[i][3] + ' ' + parts[i][4] + ','
                            + parts[i][5] + ' ' + parts[i][6] + ',' + parts[i][7];
                break;
            case 'Z':
                path += 'Z';
                break;
        }
    }
    return path;
  }

  cleanRounding(text) {
    text = text.replace(/-?\d+.\d+e-\d+/g, '0'); // e notation
    text = text.replace(/Z[ ]*M/g, 'M'); // 1 continous path only for font!
    text = text.replace(/(\d+)\.(\d{2,})/g, function (a, b, c) {
        // 2 Decimal Rounding
        a = (Math.round(parseFloat(a) * 100) / 100).toString();
        var p = a.split('.');
        if (p.length == 1) {
            return a;
        }
        if (p[1] == '00') {
            return b;
        } else if (p[1] == '99' || p[1] == '98') {
            return Math.ceil(parseFloat(a));
        } else if (p[1] == '01' || p[1] == '02') {
            return Math.floor(parseFloat(a));
        } else if (p[1] == '50' || p[1] == '49'
            || p[1] == '48' || p[1] == '51' || p[1] == '52') {
            return b + '.5';
        }
        return a;
    });
    return text;
  }

  optimizePath() {
      var data = this.data;
      var parts = this.optimize(this.parsePathString(this.cleanRounding(this.convertToAbsolute(data))))
      return this.partsToPath(parts);
  }

  parsePathString(pathString) {
    /// <summary>Taken from Snap Library</summary>
    var paramCounts = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
        data = [];
    pathString.replace(this.pathCommand, (a, b, c) => {
        var params = [],
            name = b.toLowerCase();
        c.replace(this.pathValues, function (a, b) {
            b && params.push(+b);
        });
        if (name == "m" && params.length > 2) {
            data.push([b].concat(params.splice(0, 2)));
            name = "l";
            b = b == "m" ? "l" : "L";
        }
        if (name == "o" && params.length == 1) {
            data.push([b, params[0]]);
        }
        if (name == "r") {
            data.push([b].concat(params));
        } else while (params.length >= paramCounts[name]) {
            data.push([b].concat(params.splice(0, paramCounts[name])));
            if (!paramCounts[name]) {
                break;
            }
        }
    });
    return data;
  }
}
