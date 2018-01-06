import * as assert from 'assert';
import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Octicon, { OcticonSymbol } from '../../index';

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;
const symbols = Object.getOwnPropertyNames(require('octicons')) as OcticonSymbol[];

describe('<Octicon>', function() {
    for (const symbol of symbols) {
        it(`should render SVG icon '${symbol}'`, function() {
            const w = shallow(<Octicon name={symbol} />);
            const svg = w.find('svg');
            assert.equal(svg.length, 1);
            const props = svg.first().props();
            assert.ok(props.width);
            assert.ok(props.height);
            assert.ok(props.viewBox);
        });
    }
});
