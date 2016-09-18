// variable setup
var json;
// state
var change = 0;
// size
var base = 0.00;
var val = 0.00;
var valdisp = 0.00;
var delta = 0.00;
var diameter = 200;
var scaler = 0.00;
var increment = 0.00;
// time
var rate = 30.00;
// style
var alph = 50;
var bkg = 25.00;
var bkb = 25.00;
var lines;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, int(bkg), int(bkb));
  lines = loadStrings("http://finance.google.com/finance/info?client=ig&q=TPE:TAIEX");
  println("lines" + lines);
}

function draw() {
  background(200, int(bkg), int(bkb));

  // drawing
  noStroke();
  alph = (diameter*50)/height;
  fill(0, 0, 255, alph);
  ellipse(width/2, height/2, diameter, diameter);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//function value() {
  //var lines = loadStrings("http://finance.google.com/finance/info?client=ig&q=TPE:TAIEX");
  //var lines[] = loadvars("http://finance.google.com/finance/info?client=ig&q=NSE:SPX");
  //var joined = join(lines, "");
  //var clean = split(joined, "// ");
  //json = clean[1];
  //var test = json.getJSONObject(0);
  //var lstr = test.getvar("l");
  //var cleanl = split(lstr, ",");
  //var joinedl = join(cleanl, "");
  //var value = float(joinedl);
  //return value;
//}
