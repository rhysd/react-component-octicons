import * as React from 'react';

export interface OcticonProps {
    name: OcticonSymbol;
    size?: string;
}

export default class Octicon extends React.PureComponent<OcticonProps> {
    render() {
        const { name, size } = this.props;
        const icon: IconInfo = OCTICONS[name];
        const style = { display: 'inline-block', verticalAlign: 'text-top' };

        let width, height;
        if (size) {
            if (size[0] === 'x') {
                const zoom = parseInt(size.slice(1), 10);
                width = (icon.width * zoom) | 0;
                height = (icon.height * zoom) | 0;
            } else {
                width = height = size;
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
    viewBox: string;
    aria: boolean;
    path: JSX.Element;
}
