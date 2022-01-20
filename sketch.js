
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box2 = createSprite(123,125,45,45);
  box3 = createSprite(270,125,45,45);
}

function draw() 
{

  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("lightblue");
  }
 
    if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
   
  }

  if(keyIsDown(UP_ARROW)){
    background("pink")
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightgreen");
  }


  
  drawSprites();
}

