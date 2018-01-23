import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

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

const IconDemo = props => (
    <main>
        <h2 className="samples-title">Sized Icons</h2>
        <SizesTable name={props.name} />
        <h2 className="samples-title">Styled Icons</h2>
        <StylesTable name={props.name} />
    </main>
);

const stories = storiesOf('Octicons', module);
for (const name of Object.keys(octicons)) {
    stories.add(name, () => <IconDemo name={name} />);
}
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
