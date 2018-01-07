import * as React from 'react';

export interface OcticonProps {
    name: OcticonSymbol;
}

export default class Octicon extends React.PureComponent<OcticonProps> {
    render() {
        const icon: IconInfo = OCTICONS[this.props.name];
        const style = { display: 'inline-block', verticalAlign: 'text-top' };
        const width = icon.width;
        const height = icon.height;
        const viewBox = `0 0 ${width} ${height}`;
        return (
            <svg
                style={style}
                width={width}
                height={height}
                viewBox={viewBox}
                fill="currentColor"
                aria-hidden={icon.aria}
            >
                {icon.path}
            </svg>
        );
    }
}

interface IconInfo {
    version: number;
    width: number;
    height: number;
    aria: boolean;
    path: JSX.Element;
}
