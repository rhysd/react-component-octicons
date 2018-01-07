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

    const attr = o.options;
    const icon = `{
    version: '${attr.version}',
    width: ${attr.width},
    height: ${attr.height},
    viewBox: '${attr.viewBox}',
    aria: ${attr['aria-hidden']},
    path: ${o.path.replace('fill-rule', 'fillRule')},
  }`;

    elems.push(`  '${o.symbol}': ${icon},`);
}

const template = fs.readFileSync(path.join(__dirname, 'template.tsx'), 'utf8');
const constant = `const OCTICONS: {[T in OcticonSymbol]: IconInfo} = {
${elems.join('\n')}
};

export type OcticonSymbol =
  ${symbols.map(s => `'${s}'`).join(' |\n  ')};
`;

fs.writeFileSync('index.tsx', template + constant, 'utf8');
