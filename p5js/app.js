var line2d;

var line3d;

var rect2d;

var tri2d;

var rect3d;

var rect3d2;

var pira;

var pira2;

var circle2d;

var sphere3d;

function setup(){

createCanvas(1300,700,WEBGL)

createEasyCam();

 line2d = new Line2d(0,0,80,-80);

 rect2d = new Rect2d(-40,-200,80,80)

 tri2d = new Triangle(0,0,-50,-100,50,-100);

 circle2d = new Circle2d(0,170,3000,200);

 rect3d = new Rect3d(-400,00,-100,100,-100,100);

 rect3d2 = new Rect3d(380,0,0,50,-50, 50);

 pira = new Piramide(-340,0,-100,100,-100,100);

 pira2 = new Piramide(-420,0,0,50,50,50)

 sphere3d = new Sphere(0,0,0,50,50,50)

}


function draw(){

background(0)

line2d.setColor(255,0,0)
line2d.setWeight(3);
line2d.draw();
line2d.rotacao(10)

rect2d.setColor(255,0,0)
rect2d.setFillColor(255,0,0)
rect2d.setWeight(3);
rect2d.draw();

tri2d.setColor(0,255,0)
tri2d.setFillColor(0,255,0)
tri2d.draw();
tri2d.rotacao(5)

circle2d.setColor(255,0,0)
circle2d.setFillColor(255,0,0)
circle2d.draw();

rect3d.setColor(255,0,0)
rect3d.setFillColor(0,255,0)
rect3d.draw();
rect3d.rotacaoZ(7)

rect3d2.setColor(255,0,0)
rect3d2.setFillColor(0,255,0)
rect3d2.draw();
rect3d2.rotacaoX(10)

pira.setColor(0,255,0)
pira.setFillColor(255,0,0)
pira.draw();
pira.rotacaoZ(6)

pira2.setColor(0,255,0)
pira2.setFillColor(255,0,0)
pira2.draw();
pira2.rotacaoX(10)

sphere3d.setColor(0,255,0)
sphere3d.setFillColor(0,255,0)
sphere3d.draw();


}