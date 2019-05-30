const pfp = require('./index');

(async()=>{
    let av = await pfp({name:"Test"});
    await av.png().toFile('./test.png');
})()