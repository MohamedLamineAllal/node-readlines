[![Build Status](https://travis-ci.org/nacholibre/node-readlines.svg)](https://travis-ci.org/nacholibre/node-readlines)

# node-readlines-next
## Fork
`node-readlines-next` is a fork of `node-readlines`! A package developed by Yoan Arnaudov! Original Repo  [here](https://github.com/nacholibre/node-readlines)

The author wasn't active for 2 years up to now!

I took the deliberate to Fork it! Merged one PR (One bring better performance) [[check here](https://github.com/nacholibre/node-readlines/pull/15)]!
And added **typescript declarations**!

Also if any PR are send! I'll make sure to treat them!

## Original author description
Reading file line by line may seem like a trivial problem, but in node, there is no straightforward way to do it. There are a lot of libraries using Transform Streams to achieve it, but it seems like a overkill, so I've wrote simple version using only the `filesystem` module of node. Note that this is *synchronous* library.

Install with
`npm install n-readlines-next`

---------------------------------------

## Documentation
### new readlines(filename, [options]);
### new readlines(fd, [options]);

**Arguments**

* `filename` - String path to the file you want to read from
* `fd` - File descriptor
* `options` - Object
  * `readChunk` - Integer number of bytes to read at once. Default: 1024
  * `newLineCharacter` - String new line character, only works with one byte characters for now. Default: `\n` which is `0x0a` hex encoded

`node-readlines` can handle files without newLineCharacter after the last line

---------------------------------------

### readlines.next()
Returns `buffer` with the line data without the `newLineCharacter` or `false` if end of file is reached.

---------------------------------------
### readlines.reset()
Resets the pointer and starts from the beginning of the file. This works only if the end is not reached.

---------------------------------------

## Example
```javascript
var lineByLine = require('n-readlines');
var liner = new lineByLine('./textFile.txt');

var line;
var lineNumber = 0;
while (line = liner.next()) {
    console.log('Line ' + lineNumber + ': ' + line.toString('ascii'));
    lineNumber++;
}

console.log('end of line reached');
```

## Typescript

For imports and types

```ts
import LineReader, { ReadLinesOptions } from 'n-readlines-next';
```

```ts
export class CsvReader {
  private _lineReader: LineReader;
}
```
