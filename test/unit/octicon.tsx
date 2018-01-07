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
        describe(`'${symbol}' icon`, function() {
            it(`should render SVG icon`, function() {
                const w = shallow(<Octicon name={symbol} />);
                const svg = w.find('svg');
                assert.equal(svg.length, 1);
                const props = svg.first().props();
                assert.ok(props.width);
                assert.ok(props.height);
                assert.equal(props.viewBox, `0 0 ${props.width} ${props.height}`);
            });

            describe('"size" prop', function() {
                it('should specify the zoom factor of icon by integer', function() {
                    const w = shallow(<Octicon name={symbol} size="x4" />);
                    const props = w
                        .find('svg')
                        .first()
                        .props();
                    const m = props.viewBox!.match(/^0 0 (\d+) (\d+)$/);
                    assert.notEqual(m, null);
                    const width = parseInt(props.width!.toString(), 10);
                    const height = parseInt(props.height!.toString(), 10);
                    assert.equal(parseInt(m![1], 10) * 4, width);
                    assert.equal(parseInt(m![2], 10) * 4, height);
                });

                it('should specify the zoom factor of icon by float', function() {
                    const w = shallow(<Octicon name={symbol} size="x1.5" />);
                    const props = w
                        .find('svg')
                        .first()
                        .props();
                    const m = props.viewBox!.match(/^0 0 (\d+) (\d+)$/);
                    assert.notEqual(m, null);
                    const width = parseInt(props.width!.toString(), 10);
                    const height = parseInt(props.height!.toString(), 10);
                    assert.equal((parseInt(m![1], 10) * 1.5) | 0, width);
                    assert.equal((parseInt(m![2], 10) * 1.5) | 0, height);
                });

                it('should specify the zoom factor of icon by percent', function() {
                    const w = shallow(<Octicon name={symbol} size="100%" />);
                    const props = w
                        .find('svg')
                        .first()
                        .props();
                    const width = props.width!.toString();
                    const height = props.height!.toString();
                    assert.equal(width, '100%');
                    assert.equal(height, '100%');
                });
            });
        });
    }
});
