# react-use-p5

> use p5 with hooks

![Node.js CI](https://github.com/zenoplex/react-use-p5/workflows/Node.js%20CI/badge.svg)
[![NPM](https://img.shields.io/npm/v/@gen/react-use-p5.svg)](https://www.npmjs.com/package/@gen/react-use-p5) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
# with npm
npm install --save @gen/react-use-p5

# with yarn
yarn add @gen/react-use-p5
```

## Usage

```tsx
import React, { Component } from 'react';
import { useP5 } from '@gen/react-use-p5';
import { sketch } from 'your-p5-sketch-file';

const Component = () => {
  const [setRef] = useP5(sketch);
  // Canvas will be rendered as child of div
  return <div ref={setRef} />
}
```

## License

MIT © [zenoplex](https://github.com/zenoplex)
