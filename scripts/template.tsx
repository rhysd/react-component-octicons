import * as React from 'react';

export interface OcticonProps {
    name: OcticonSymbol;
    zoom?: string;
    style?: React.CSSProperties;
}

export default class Octicon extends React.PureComponent<OcticonProps> {
    render() {
        const { name, zoom } = this.props;
        const icon: IconInfo = OCTICONS[name];
        const style = { display: 'inline-block', verticalAlign: 'text-top', ...this.props.style };

        let width, height;
        if (zoom) {
            if (zoom[0] === 'x') {
                const z = parseFloat(zoom.slice(1));
                width = (icon.width * z) | 0;
                height = (icon.height * z) | 0;
            } else {
                width = height = zoom;
            }
        } else {
            width = icon.width;
            height = icon.height;
        }

        return (
            <svg
                style={style}
                width={width}
                height={height}
                viewBox={icon.viewBox}
                fill="currentColor"
                aria-hidden={icon.aria}
                version={icon.version}
            >
                {icon.path}
            </svg>
        );
    }
}

interface IconInfo {
    version: string;
    width: number;
    height: number;
    viewBox: string;
    aria: boolean;
    path: JSX.Element;
}
