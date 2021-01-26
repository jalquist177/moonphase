let radius = 10;
let starXloc = [];
let starYloc = [];
let numstar = 100

function setup() {
createCanvas(1000,900);
img = loadImage("moon.png");

for (var i = 0; i < numstar; i++) {
  starXloc.push(random(width));
  starYloc.push(random(height));
}
}

function draw() {
background(0);
let phase=map(mouseX, 0, width, 1, 30);
drawMoon(phase);
//print(mouseX+'\n');

//  image(img, 550, 100, 250, 250);

// {
// //translate(width/2, height/2, 200);
// //sphere(40);
// //fill(255, 255, 255);
// }

// {
// //ellipse(650, 200, 200, 200);
// fill(0);
// }

// {
// //ellipse(mouseX, 200, 250, 400);
// ellipse(mouseX, 200, 250, 280);
// fill(255, 255, 255);
// }


for (var i = 0; i <= numstar; i++) {
  push();
  translate(starXloc[i], starYloc[i]);
  drawStar(10);
  pop();
}

// push();
// translate(100, 100);
// drawStar(10);
// pop();

// push();
// translate(300, 100);
// drawStar(10);
// pop();

// push();
// translate(700, 400);
// drawStar(10);
// pop();

// push();
// translate(625, 550);
// drawStar(10);
// pop();

// push();
// translate(100, 600);
// drawStar(10);
// pop();

// push();
// translate(200, 650);
// drawStar(10);
// pop();

// push();
// translate(100, 400);
// drawStar(10);
// pop();

// push();
// translate(150, 250);
// drawStar(10);
// pop();

// push();
// translate(300, 500);
// drawStar(10);
// pop();

// push();
// translate(250, 300);
// drawStar(10);
// pop();

// push();
// translate(555, 666);
// drawStar(10);
// pop();

// push();
// translate(400, 666);
// drawStar(10);
// pop();


// push();
// translate(500, 600);
// drawStar(10);
// pop();

// push();
// translate(444, 333);
// drawStar(10);
// pop();

// push();
// translate(222, 333);
// drawStar(10);
// pop();

// push();
// translate(444, 113);
// drawStar(10);
// pop();

// push();
// translate(350, 300);
// drawStar(10);
// pop();

// push();
// translate(700, 700);
// drawStar(10);
// pop();

// push();
// translate(666, 666);
// drawStar(10);
// pop();

// push();
// translate(500, 600);
// drawStar(10);
// pop();

// push();
// translate(200, 300);
// drawStar(10);
// pop();

// push();
// translate(440, 444);
// drawStar(10);
// pop();

// push();
// translate(440, 200);
// drawStar(10);
// pop();

// push();
// translate(200, 444);
// drawStar(10);
// pop();

// push();
// translate(200, 200);
// drawStar(10);
// pop();

// push();
// translate(300, 444);
// drawStar(10);
// pop();

// push();
// translate(500, 450);
// drawStar(10);
// pop();


}	

function drawStar(size){

	beginShape();

for(let i = 0; i < 10; i++) {

  const x = cos(radians(i * 36)) * size;
  const y = sin(radians(i * 36)) * size;
  vertex(x, y);

  if(size == 10) {
    size = 5;
  } else {
    size = 10;
  }
  fill (255,255,0)
}
endShape();

}


function drawMoon(phase){
  phase=map(phase, 1, 30, 450, 910);
  image(img, 550, 100, 250, 250);

//{
//translate(width/2, height/2, 200);
//sphere(40);
//fill(255, 255, 255);
//}

{
//ellipse(650, 200, 200, 200);
fill(0);
}

{
//ellipse(mouseX, 200, 250, 400);
ellipse(phase, 200, 250, 280);
fill(255, 255, 255);
}

}

//function drawMoon(Let moonphase){

	

//}