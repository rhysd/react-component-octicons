import * as React from 'react';
import { render } from 'react-dom';
import Octicon from '../../index';

render(
    <div>
        <Octicon name="alert" />
        <div className="blue">
            <Octicon name="star" />
        </div>
    </div>,
    document.getElementById('root'),
);
