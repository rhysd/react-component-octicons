React Component for Octicons
============================
[![Build Status](https://travis-ci.org/rhysd/react-component-octicons.svg?branch=master)](https://travis-ci.org/rhysd/react-component-octicons)
[![NPM Version](https://badge.fury.io/js/react-component-octicons.svg)](https://www.npmjs.com/package/react-component-octicons)

[react-component-octicons][] is a [React][] component library for the latest [Octicons][] (v7.x).
This library wraps SVG icons and provides one React component `<Octicon/>`.

This library is built and ready for [TypeScript][].

This library has no dependency because all `<svg>` elements for octicons are embedded in library.
You don't need any source code bundler to use this library.

## Installation

```
$ npm install --save react-component-octicons
```

## Usage

`<Octicon/>` component has a required property `name` and an optional property `zoom`.

```typescript
import * as React from 'react';
import { render } from 'react-dom';
import Octicon from 'react-component-octicons';

render(
    <div>
        // Normal size
        <Octicon name="alert" />

        // Twice bigger
        <Octicon name="star" zoom="x2" />

        // Size 100px x 100px
        <div style={{width: '100px', height: '100px'}}>
            <Octicon name="flame" zoom="100%" />
        </div>
    </div>,
    document.getElementById('root'),
);
```

### `name` property

`name` is a symbol name for an icon. Symbol names are described in [Octicons document][Octicons].

### `zoom` property

`zoom` is a string value and it represents the zoom factor of the icon.

- `x{N}`: `N` is a number (integer or float). Zoom the icon by xN (i.e. `x4` means 4 times bigger than normal).
- `N%`: `N` is a number between 0~100. It means N% size of its parent element. So `100%` means to fit to the parent element.

## Typo Safety for Icon Names

`name` property of `<Octicon/>` is restricted to actual symbol names. For example, following code contains typo `allow-right` (`arrow-right` is correct).

```typescript
// ERROR! 'allow-right' is typo of 'arrow-right'
render(
    <Octicon name="allow-right" />,
    document.getElementById('root'),
);
```

It falls into a compilation error.

```
test.tsx(5,17): error TS2322: Type '{ name: "allow-right"; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Octicon> & Readonly<{ children?: ReactNode; }> & R...'.
  Type '{ name: "allow-right"; }' is not assignable to type 'Readonly<OcticonProps>'.
    Types of property 'name' are incompatible.
      Type '"allow-right"' is not assignable to type 'OcticonSymbol'.
```

## License

[Distributed under the MIT License](LICENSE.txt).


[Octicons]: https://octicons.github.com/
[React]: https://github.com/facebook/react
[react-component-octicons]: https://github.com/rhysd/react-component-octicons
[TypeScript]: https://www.typescriptlang.org/
