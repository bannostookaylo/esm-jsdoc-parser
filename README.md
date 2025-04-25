# @esm-jsdoc/parser

A lightweight, modular JSDoc comment parser for ES Module code.

## Installation

```javascript
  npm install @esm-jsdoc/parser
```

## Usage

```javascript
import { parseCode, parseFile, parseDirectory } from '@esm-jsdoc/parser';
```

1. Parse a string
    ```javascript
    const code = `
        /**
         * Hello world
         * @returns {string}
        */
        export function hello() { return 'world'; }
    `;

    console.log(parseCode(code));
    ```

2. Parse a single file
    ```javascript
    const docs = await parseFile('src/lib.js');
    ```

3. Parse an entire directory
    ```javascript
    const all = await parseDirectory('src/');
    ```