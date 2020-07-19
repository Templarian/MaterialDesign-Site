export async function getGitHubPreview(name, data, isWorkInProgress: boolean, action: string = 'none'): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>(async (resolve, reject) => {
    let color: string = isWorkInProgress ? 'FFF' : '8B8B8B';
    let paths = [
      getIconSvgPath(data, 11, 10, 1),
      getIconSvgPath(data, 11, 44, 2),
      getIconSvgPath(data, 70, 10, 10)
    ];
    const width = 325,
      height = 294;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    paths.forEach((path, i) => {
      path.setAttribute('d', data);
      path.setAttribute('fill', `#${color}`);
      svg.appendChild(path);
    });
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('transform', 'translate(11, 283)');
    text.setAttribute('fill', '#555');
    text.style.fontFamily = 'Segoe UI,Roboto,Arial';
    text.style.fontSize = '12pt';
    text.textContent = name;
    svg.appendChild(text);
    resolve(await getPngFromSvg(svg));
  });
}

async function getPngFromSvg(svgElement: SVGSVGElement): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    var svg = new XMLSerializer().serializeToString(svgElement);
    var img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(svg)}`;
  });
}

function getIconSvgPath(data, x, y, scale): SVGPathElement {
  const ns = 'http://www.w3.org/2000/svg',
    path = document.createElementNS(ns, 'path');
  path.setAttribute('d', data);
  path.setAttribute('transform', `translate(${x},${y}) scale(${scale},${scale})`)
  return path;
}