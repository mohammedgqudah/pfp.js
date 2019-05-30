# Pfp.js
A library for creating beautiful identicons.

![preview](./preview.png)
# Usage
the default export is an async function `await pfp({name:"Test"})` it returns a [sharp.js](https://github.com/lovell/sharp) object

```javascript
const pfp = require('pfp.js');
(async() => {
    let av = await pfp({ name: "Test" });
    await av.png().toFile('./test.png');
})()
```
