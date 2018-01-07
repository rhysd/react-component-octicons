import * as React from 'react';
import { render } from 'react-dom';
import Octicon from '../../index';

render(
    <main>
        <h3>Normal</h3>
        <Octicon name="alert" />
        <h3>Color</h3>
        <div className="red">
            <Octicon name="star" />
        </div>
        <h3>Large</h3>
        <Octicon name="flame" zoom="x2" />
        <h3>Mega</h3>
        <Octicon name="octoface" zoom="x4" />
        <h3>Custom: Super Mega</h3>
        <div className="super-mega">
            <Octicon name="mark-github" zoom="100%" />
        </div>
    </main>,
    document.getElementById('root'),
);
