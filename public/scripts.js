// https://www.youtube.com/watch?v=4hA7G3gup-4&t=6s

var font;

var vehicles = [];

function preload(){
  font = loadFont('AvenirNextLTPro-Demi.otf')
}
var canvasHeight;
var canvas,points,canvasArea;

var text_x_offset,text_y_offset;
var text_size;
var particle_stroke,text,canva_width;


function setup() {
  console.log("P5 Loaded");
  console.log("Window Width",windowWidth);
  console.log("Window Heght",windowHeight);
  //laptop
  if (windowWidth> 600){
    text_x_offset = windowWidth/7.5
    text_y_offset = 200
    particle_stroke = 8
    text_size = 128
    canvasHeight = 300
    text = "Junior Francisco"
    canvas_width = 1000;
  
  }
  //phone
  else if (windowWidth< 600){
    text_x_offset = windowWidth/6
    text_y_offset = 200
    particle_stroke = 10
    text_size = 70
    canvasHeight = 250
    text = "Junior"
    canvas_width = 200;
  
  }
  canvas = createCanvas(canvas_width, canvasHeight);
  canvasArea = windowWidth * (windowHeight/2.416);
  console.log("canvas Area",canvasArea)
  canvas.parent('canvasHolder');
  textFont(font);
  console.log("Text Size",text_size)
  textSize(text_size);
  points = font.textToPoints(text,2,text_y_offset);
  console.log(points);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}


function draw() {
  background(255);
  for (var i =0;i<vehicles.length;i++){
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();



  }
  // vehicles.forEach(vehicle => {
  //   vehicle.update();
  //   vehicle.show();
  // })
}

// function windowResized() {
//   canvas.resizeCanvas(windowWidth, canvasHeight);
// }