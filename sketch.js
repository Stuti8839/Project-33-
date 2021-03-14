const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var count = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  text("Score : " + score, 10, 790);
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
  text("Score : " + score,20,30);
  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0 && count<5){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     count++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
if(gameState === "start"){
   if(particle!=null){
     particle.display();

     if (particle.body.position.y>760){

       if(particle.body.position.x < 300){
        score=score+500;
       }

       if(particle.body.position.x > 301 && particle.body.position.x < 600){
        score=score+100;
       }

       if(particle.body.position.x > 601 && particle.body.position.x < 900){
        score=score+200;
       }
       particle = null;
     }
     if(count>5) {
      gameState = "end";
    }
   }
  }
   if(gameState === "end"){
     textSize(50);
    text("Game Over", 400,400);
   }

   //division 1
  text(500, 20, 700);
  //division 2
  text(500, 100, 700);
  //division 3
  text(500, 180, 700);
  //division 4
  text(500, 260, 700);
  //division 5
  text(100, 340, 700);
  //division 6
  text(100, 420, 700);
  //division 7
  text(100, 500, 700);
  //division 8
  text(200, 580, 700);
  //division 9
  text(200, 660, 700);
  //division 10
  text(200, 740, 700);
}

function mousePressed(){
  if(gameState!="end"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}