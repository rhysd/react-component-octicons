import * as fs from 'fs';
import * as path from 'path';

interface Octicon {
    keywords: string[];
    path: string;
    height: string;
    width: string;
    symbol: string;
    options: {
        version: string;
        width: string;
        height: string;
        viewBox: string;
        class: string;
        'aria-hidden': string;
    };
    toSVG(): string;
}

const elems = [];

const octicons = require('octicons');
const symbols = Object.getOwnPropertyNames(octicons);
for (const name of symbols) {
    const o: Octicon = octicons[name];
    if (o.symbol !== name) {
        continue;
    }
    const svg = `<svg id="octicon-${o.symbol}" viewBox="${o.options.viewBox}" width="${o.width}" height="${
        o.height
    }" stroke="currentcolor" fill="currentcolor">
    ${o.path}
  </svg>`;
    elems.push(`  '${o.symbol}': ${svg},`);
}

const template = fs.readFileSync(path.join(__dirname, 'template.ts'), 'utf8');
const constant = `const OCTICON_SVGS: {[T in OcticonSymbol]: JSX.Element} = {
${elems.join('\n')}
};

export type OcticonSymbol =
  ${symbols.map(s => `'${s}'`).join(' |\n  ')};
`;

fs.writeFileSync('index.tsx', template + constant, 'utf8');
