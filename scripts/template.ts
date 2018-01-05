import * as React from 'react';

export interface OcticonProps {
    name: string;
}

export default class Octicon extends React.PureComponent<OcticonProps> {
    render() {
        return OCTICON_SVGS[this.props.name];
    }
}
