import * as React from 'react';
import { render } from 'react-dom';
import Octicon from '../../index';

render(
    <div>
        <Octicon name="alert" />
        <Octicon name="star" />
    </div>,
    document.getElementById('root'),
);
