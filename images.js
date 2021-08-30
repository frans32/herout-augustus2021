
import sharp from "sharp";
import fs from "fs";

let fileNames = fs.readdirSync("./static/images/");

fileNames.forEach((fn) => {
  let file = fs.readFileSync("./static/images/" + fn);
  sharp(file)
    .resize(1125, 720)
    .toFile(`./static/i/720/${fn.slice(0, fn.length - 4)}.webp`);
  sharp(file)
    .resize(1125, 720)
    .toFile(`./static/i/720/${fn.slice(0, fn.length - 4)}.jpg`);

  sharp(file)
    .resize(750, 480)
    .toFile(`./static/i/480/${fn.slice(0, fn.length - 4)}.webp`);
  sharp(file)
    .resize(750, 480)
    .toFile(`./static/i/480/${fn.slice(0, fn.length - 4)}.jpg`);

  sharp(file)
    .resize(375, 240)
    .toFile(`./static/i/240/${fn.slice(0, fn.length - 4)}.webp`);
  sharp(file)
    .resize(375, 240)
    .toFile(`./static/i/240/${fn.slice(0, fn.length - 4)}.jpg`);

  sharp(file)
    .resize(192, 192)
    .toFile(`./static/i/192/${fn.slice(0, fn.length - 4)}.jpg`);
});

console.log("Done!");