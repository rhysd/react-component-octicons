import * as React from 'react';
import { render } from 'react-dom';
import Octicon from '../../index';

render(
    <div>
        Normal: <Octicon name="alert" />
        <div className="red">
            Color: <Octicon name="star" />
        </div>
        <div>
            Large: <Octicon name="flame" size="x2" />
        </div>
        <div>
            Mega: <Octicon name="octoface" size="x4" />
        </div>
        <div>
            Custom:
            <div className="super-mega">
                <Octicon name="mark-github" size="100%" />
            </div>
        </div>
    </div>,
    document.getElementById('root'),
);
