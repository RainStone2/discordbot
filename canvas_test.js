const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const width = 2400;
const height = 1240;

const canvas = createCanvas(width, height)
const context = canvas.getContext("2d")

context.fillStyle = "yellow"
context.fillRect(0, 0, width, height)
loadImage("./NODEJS.png").then((image) => {
  context.drawImage(image, 425, 225);
  const buffer = canvas.toBuffer("image/png")
  fs.writeFileSync("./image.png", buffer)
});
