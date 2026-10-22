 let vermelho =255;
 let destino = 150;

 let azul = 113;
 let destinoAzul = 80;

 function setup() {
  createCanvas(800, 784);
  background(245);

}

function draw() {

 vermelho = lerp(vermelho, destino, 0.03);

 if(abs(vermelho - destino) < 1) 
  destino = random(150,255);

  fill(vermelho, 0, 0);
  noStroke(0);rect(0, 0, 362, 310);

 azul = lerp(azul, destinoAzul, 0.04);

  if (abs(azul - destinoAzul) < 1) {
 destinoAzul = random(70, 150);
  }
  fill(31, 29, azul);
  noStroke(0);rect(363, 502, 255, 255);
    
  fill(253, 220, 0);
  noStroke(0);rect(0, 502, 85, 280);

  stroke(0);
  strokeWeight(15);
  line(363, 0, 363, 784);
 
  strokeWeight(16);
  line(0, 310, 800, 310);

  strokeWeight(16);
  line(0, 502, 800, 502);
 
  strokeWeight(10);
  line(86, 500, 86, 784);
  line(620, 500, 620, 784);

  strokeWeight(16);
  line(363, 760, 615, 760);




 
}