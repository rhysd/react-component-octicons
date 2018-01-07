import * as React from 'react';
import { render } from 'react-dom';
import Octicon from '../..';

render(
    <main>
        // Normal size
        <Octicon name="alert" />
        // Twice bigger
        <Octicon name="star" zoom="x2" />
        // Size 100px x 100px
        <div style={{ width: '100px', height: '100px' }}>
            <Octicon name="flame" zoom="100%" />
        </div>
    </main>,
    document.getElementById('root'),
);
