var micp;
var hit = false;

function preload() {
  img = loadImage('Space_Shuttle_USA.png');
  img2 = loadImage('sfondo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  micp = new p5.AudioIn();
  micp.start();
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  textFont("Space Mono");
  image(img2, windowWidth / 2, windowHeight / 2, img.width * 6, img.height * 1.6);
  var vol = micp.getLevel();
  fill(0, 255, 0);
  var x = random(0, windowWidth);
  y = map(vol, 0, 0.7, windowHeight, 0);
  fill(255, 255, 255, 0);
  ellipse(windowWidth / 2, y, 70);//sfera verifica collisione
  fill(255);
  ellipse(windowWidth / 2, 0, 150);//luna
  image(img, windowWidth / 2, y, img.width / 2, img.height / 2);//immaine shuttle
  fill(255);
  textSize(windowWidth / 25);
  text("Soffia nel microfono", windowWidth / 2, windowHeight * 7.5 / 15);
  text(" per far partire lo shuttle", windowWidth / 2, windowHeight * 8.5 / 15);
  textSize(windowWidth / 50);
  text("(sei tu il suo propulsore)", windowWidth / 2, windowHeight * 8 / 15);
  hit = collideCircleCircle(windowWidth / 2, y, 50, windowWidth / 2, 0, 150)
  if (hit == true) {
    fill(random(0, 255));
    textSize(windowWidth / 15);
    text('MISSION COMPLETED ', windowWidth / 2, windowHeight / 8);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
