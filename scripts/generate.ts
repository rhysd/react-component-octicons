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
for (const name of Object.getOwnPropertyNames(octicons)) {
    const octicon: Octicon = octicons[name];
    if (octicon.symbol !== name) {
        continue;
    }
    elems.push(`  "${octicon.symbol}": ${octicon.path},`);
}

const template = fs.readFileSync(path.join(__dirname, 'template.ts'), 'utf8');
const constant = `const OCTICON_SVGS: {[name: string]: JSX.Element} = {
${elems.join('\n')}
};
`;

fs.writeFileSync('index.tsx', template + constant, 'utf8');
