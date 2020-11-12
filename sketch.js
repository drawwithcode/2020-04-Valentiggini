let button;
let photo;
let font;
let letters = " .,;xe$";  // palette caratteri
let charW = 6;            // larghezza cella caratteri
let charH = 9;            // altezza cella caratteri
let toneDiv = 100.0 / letters.length;
let backgroundColor = 255;
let textColor = 0;
let darkTheme = false;
let changeWords = false;
//let changeNumeri = false;

function preload() {
  photo = loadImage("assets/wallpaper.jpg");
  font = loadFont("assets/inconsolata.ttf");
}

function setup() {
  canvas = createCanvas(windowWidth, 750);
  canvas.parent("sketch-div");

  //button1

  button = createButton('Dark Theme')
  button.class("buttonstyle");
  button.mouseClicked(onClick);
  photo.resize(photo.width / charW, photo.height / charH);

//button2

  button2 = createButton('Change words');
  button2.class("buttonstyle");
  button2.mouseClicked(cambioLettere);

//button3

//  button3 = createButton('Numbers');
//  button3.class("buttonstyle");
//  button3.mouseClicked(numeri);

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
    backgroundColor = 0;
    textColor = 255;
    button.html('Light Theme');
    darkTheme = true;
  } else {
    backgroundColor = 255;
    textColor = 0;
    button.html('Dark Theme');
    darkTheme = false;
  }
  drawAscii()
}

function cambioLettere() {
  if (!changeWords) {
    button2.html('Change words');
    letters = " .,;xe$";
    changeWords = true;

  } else {
    button2.html('reset');
    letters = " -+°vYQ";
    changeWords = false;
  }
  drawAscii()
}

//function numeri() {
//if (!changeNumeri) {
//button3.html('Numbers');
//letters = " .014689";
//changeNumeri = true;
//} else {
//  button3.html('reset');
//  letters =" .,;xe$"
//  changeNumeri = false;
//}
//}
