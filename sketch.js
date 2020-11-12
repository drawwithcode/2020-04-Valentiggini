let button;
let photo;
let font;
let letters = " .,;xe$";  // palette caratteri
let charW = 6;            // larghezza cella caratteri
let charH = 9;            // altezza cella caratteri
let toneDiv = 100.0 / letters.length;
let backgroundColor = 255
let textColor = 0
let darkTheme = false

function preload() {
  photo = loadImage("assets/topolino.jpg");
  font = loadFont("assets/inconsolata.ttf");
}

function setup() {
  createCanvas(1200, 720);
  button = createButton('Dark Theme')
  button.mouseClicked(onClick)
  photo.resize(photo.width / charW, photo.height / charH);

  drawAscii()
}

function drawAscii() {
  background(backgroundColor);
  fill(textColor);
  textFont(font, 14);
  for (let y = 0; y < photo.height; y++) {
    for (let x = 0; x < photo.width; x++) {
      let col = photo.get(x, y);
      let tone = lightness(col) / toneDiv;
      let letter = letters.charAt(tone);

      text(letter, x * charW, y * charH);
    }
  }
}

function onClick() {
  if (!darkTheme) {
    backgroundColor = 0
    textColor = 255
    button.html('Light Theme')
    darkTheme = true
  } else {
    backgroundColor = 255
    textColor = 0
    button.html('Dark Theme')
    darkTheme = false
  }
  drawAscii()
}