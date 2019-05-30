import sharp from 'sharp';
import svg2img from 'svg2img';
// import gradient from "random-gradient";
import Trianglify from 'trianglify';
import xmlserializer from 'xmlserializer';
import text2png from 'text2png';

const svg2imgPromise = _svg => {
    return new Promise((resolve, reject) => {
        svg2img(_svg, (e, buffer) => {
            resolve(buffer);
        });
    });
};
const pfp = async options => {
    let {
        width = 400,
        height = 400,
        opacity = 1,
        id,
        _width = 200,
        _height = 50,
        text_color = 'white',
        name = 'Hyper',
        r = 0,
        g = 0,
        b = 0,
        alpha = 0.5
    } = options;
    let pattern = Trianglify({
        width,
        height,
        seed: id
    });
    let svgString = xmlserializer.serializeToString(pattern.svg());
    let buffer = await svg2imgPromise(svgString);
    let text = text2png(name, { color: text_color });
    let overlay = await sharp({
        create: {
            width: _width,
            height: _height,
            channels: 4,
            background: {
                r: Number(r),
                g: Number(g),
                b: Number(b),
                alpha: Number(alpha)
            }
        }
    })
        .png()
        .toBuffer();
    return sharp(buffer).composite([
        { input: overlay, gravity: 'centre' },
        { input: text, gravity: 'centre' }
    ]);
};

export default pfp;
