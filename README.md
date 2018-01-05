React Components for Octicons
=============================
[![Build Status](https://travis-ci.org/rhysd/react-component-octicons.svg?branch=master)](https://travis-ci.org/rhysd/react-component-octicons)

[react-component-octicons][] is a [React][] component library for [Octicons][].
This library wraps SVG icons and provides one React component `<Octicon>`.

This library is ready for [TypeScript][].

This library has no dependency because all `<svg>` elements for octicons are embedded in library.
You don't need any source code bundler to use this library.

## Installation

```
$ npm install --save react-component-octicons
```

## Usage

`<Octiocon>` component has one required property `name`. `name` is a symbol name for an icon.
Symbol names are described in [Octicons document][Octicons].

```typescript
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
```

## License

[Distributed under the MIT License](LICENSE.txt).


[Octicons]: https://octicons.github.com/
[React]: https://github.com/facebook/react
[react-component-octicons]: https://github.com/rhysd/react-component-octicons
[TypeScript]: https://www.typescriptlang.org/
