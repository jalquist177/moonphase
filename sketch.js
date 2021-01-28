let radius = 10;
let starXloc = [];
let starYloc = [];
let numstar = 100

function setup() {
createCanvas(1000,900);
img = loadImage("moon.png");

for (var i = 0; i < numstar; i++) {
  let xy = getRandomXandY();
  starXloc.push(xy[0]);
  starYloc.push(xy[1]);
}
}





function draw() {
background(0);
let phase=map(mouseX, 0, width, 1, 30);
drawMoon(phase);


for (var i = 0; i <= numstar; i++) {
  push();
  translate(starXloc[i], starYloc[i]);
  drawStar(10);
  pop();
  }

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

  {

  fill(0);
  }

{
  ellipse(phase, 200, 250, 280);
  fill(255, 255, 255);
  }


}

function getRandomXandY(){
  let x = 500;
  let y = 300;
  while (x > 450 && x < 910 && y > 100 && y < 400){
    x = random(width);
    y = random(height);
  }
   //console.log(number);
  return[x, y];
}





