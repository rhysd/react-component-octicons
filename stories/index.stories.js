import React from 'react';
import { storiesOf } from '@storybook/react';
import * as octicons from 'octicons';

// XXX:
// Storybook only loads ES Modules style imports/exports. But I exported modules as commonjs.
// So storybook cannot import my module correctly and I decided to see `exports` variable directly.
// `exports` is defined in preview-head.html.
import _Octicon from '../index.js';
const Octicon = exports.default;

function propsToString(props) {
    const names = Object.keys(props);
    if (names.length === 0) {
        return 'no prop';
    }
    const strProps = [];
    for (const name of names) {
        strProps.push(`${name}={${JSON.stringify(props[name])}}`);
    }
    return strProps.join(' ');
}

const SamplesTable = props => {
    const header = props.data.map((ps, i) => <td key={`head-${i}`}>{propsToString(ps)}</td>);
    const body = props.data.map((ps, i) => (
        <td key={`body-${i}`}>
            <Octicon name={props.name} {...ps} {...props.hidden} />
        </td>
    ));

    return (
        <table className="samples-table">
            <thead>
                <tr className="icon-sample-head">{header}</tr>
            </thead>
            <tbody>
                <tr className="icon-sample-body">{body}</tr>
            </tbody>
        </table>
    );
};

const SizesTable = props => (
    <SamplesTable name={props.name} data={[{}, { zoom: 'x2' }, { zoom: 'x3' }, { zoom: 'x4' }]} />
);

function randomColor() {
    const colors = ['red', 'green', 'blue'];
    return colors[Math.floor(Math.random() * colors.length)];
}

const StylesTable = props => (
    <SamplesTable
        name={props.name}
        data={[
            { style: { color: randomColor() } },
            { style: { transform: 'rotate(45deg)' } },
            { style: { animation: 'spin-example 4s linear infinite' } },
        ]}
        hidden={{ zoom: 'x2' }}
    />
);

const ForkMeOnGitHubRibbon = (
    <a href="https://github.com/rhysd/react-component-octicons">
        <img
            style={{ position: 'absolute', top: '0', right: '0', border: '0' }}
            src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
        />
    </a>
);

const ExampleCode = props => (
    <pre className="code-sample">
        <code>
            {`import Octicon from 'react-component-octicons';

<Octicon name="${props.name}"/>`}
        </code>
    </pre>
);

const IconDescription = props => (
    <div className="icon-description">
        <a href={`https://octicons.github.com/icon/${props.name}/`} rel="noopener" target="_blank">{`'${
            props.name
        }' octicon`}</a>{' '}
        component for React.
        <ExampleCode name={props.name} />
    </div>
);

const IconDemo = props => (
    <main>
        {ForkMeOnGitHubRibbon}
        <h2 className="samples-title">Description</h2>
        <IconDescription name={props.name} />
        <h2 className="samples-title">Sized Icons</h2>
        <SizesTable name={props.name} />
        <h2 className="samples-title">Styled Icons</h2>
        <StylesTable name={props.name} />
    </main>
);

const stories = storiesOf('Octicons Catalog', module);
for (const name of Object.keys(octicons)) {
    stories.add(name, () => <IconDemo name={name} />);
}
