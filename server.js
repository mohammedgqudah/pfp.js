import express from 'express';
import pfp from './src/pfp';

const app = express();

app.get('/', async (req, res) => {
    let sharp = await pfp(req.query);
    sharp.png()
    .pipe(res);
});
app.listen(3000, console.log.bind(console, 'server is up'));
