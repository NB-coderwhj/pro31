const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var p1;
var ground;

var plinkos = [];
var particles = [];
var divisions = [];

var divHt = 160;

function setup() {
  createCanvas(450,600);

  engine = Engine.create();
  world = engine.world
  
 /* p1 = new Plinko(30,100,12);
  p2 = new Plinko(90,100,12);
  p3 = new Plinko(150,100,12);
  p4 = new Plinko(210,100,12);
  p5 = new Plinko(270,100,12);
  p6 = new Plinko(330,100,12);
  p7 = new Plinko(390,100,12);
  p8 = new Plinko(30,160,12);
  p9 = new Plinko(90,160,12);
  p10 = new Plinko(150,160,12);
  p11 = new Plinko(210,160,12);
  p12 = new Plinko(270,160,12);
  p13 = new Plinko(330,160,12);
  p14 = new Plinko(390,160,12);
  p15 = new Plinko(30,220,12);
  p16 = new Plinko(90,220,12);
  p17 = new Plinko(150,220,12);
  p18 = new Plinko(210,220,12);
  p19 = new Plinko(270,220,12);
  p20 = new Plinko(330,220,12);
  p21 = new Plinko(390,220,12);
  p22 = new Plinko(90,280,12);
  p23 = new Plinko(150,280,12);
  p24 = new Plinko(210,280,12);
  p25 = new Plinko(270,280,12);
  p26 = new Plinko(330,280,12);
  p27 = new Plinko(390,280,12);
  p28 = new Plinko(30,280,12);
  p29 = new Plinko(30,340,12);
  p30 = new Plinko(330,340,12);
  p31 = new Plinko(390,340,12);
  p32 = new Plinko(90,340,12);
  p33 = new Plinko(150,340,12);
  p34 = new Plinko(210,340,12);
  p35 = new Plinko(270,340,12);*/

  ground = new Ground(570);

  /*d1 = new Division(60,);
  d2 = new Division(210);
  d3 = new Division(360);
  pa1 = new Particle(random(200,220),random(50,70))*/

  for(var d = 0; d<=width; d += 90){
    divisions.push(new Division(d,height-divHt/2-40, 10, divHt));
  }

  pushParticles();
  pushPlinkos();

}

function draw() {
  Engine.update(engine);
  background(250,195,190);  

  pushParticles();
  pushPlinkos();
 
  /*p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();
  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();
  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();
  p26.display();
  p27.display();
  p28.display();
  p29.display();
  p30.display();
  p31.display();
  p32.display();
  p33.display();
  p34.display();
  p35.display();*/

  ground.display();

  /*d1.display();
  d2.display();
  d3.display();*/

  //pa1.display();

  for(var d =0; d<divisions.length; d++){
  divisions[d].display();
  }
  for(var k =0; k<particles.length; k++){
    particles[k].display();
  }
  for(var p =0; p<plinkos.length; p++){
    plinkos[p].display();
  }
  //console.log(divisions);

}

function pushParticles(){
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-100, width/2+100),10))
  }
}

function pushPlinkos(){
  for(var p=20; p<=width; p+=50){
    plinkos.push(new Plinko(p,250));
    plinkos.push(new Plinko(p,100));
    plinkos.push(new Plinko(p,150));
    plinkos.push(new Plinko(p,200));
    plinkos.push(new Plinko(p,300));
    plinkos.push(new Plinko(p,350));
  }
  /*for(var p= 10; p<= width; p+=50){
    plinkos.push(new Plinko(p,100));
  }*/
}