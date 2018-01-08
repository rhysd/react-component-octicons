import * as React from 'react';

export interface OcticonProps {
    name: OcticonSymbol;
    zoom?: string;
    style?: React.CSSProperties;
}

export default class Octicon extends React.PureComponent<OcticonProps> {
    render() {
        const { name, zoom, style } = this.props;
        const icon: IconInfo = OCTICONS[name];
        const sty: React.CSSProperties = { display: 'inline-block', verticalAlign: 'text-top' };
        if (style !== undefined) {
            Object.keys(style).forEach(p => {
                sty[p] = style[p];
            });
        }

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
                style={sty}
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
