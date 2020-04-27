var diam1=30;
function setup() { 
   createCanvas(600, 400); 
   background(90,210,58); 
}

function draw() {   
  //head
  
  circle(255, 200, 350)
  //eye 1
  fill(255,0,200);   
   stroke(0);   
   strokeWeight(5);       
   ellipse(width/4,height/2,diam1,diam1);    
                       //width/4 is one fourth of the canvas
   diam1=diam1+0;        
   if(diam1>90){       
      diam1=30;   
   }else{       
     diam1=diam1+1;   //speed of circles
   //eye 2
   fill(255,0,200);   
   stroke(0);   
   strokeWeight(5);       
   ellipse(300,height/2,diam1,diam1);       
   diam1=diam1+0;       
   if(diam1>90){       
      diam1=30;   
   }else{       
     diam1=diam1+1; 
     
   }
  //right eyebrow
  line(100, 135, 180, 160)
  //left eyebrow
  line(270, 160, 350, 135)
     //smile
     noFill()
     arc(245, 200, 300, 250, 6.8, 7.8)
  //nose
  line(210, 255, 220, 180)
  line(210, 255, 230, 250)
}
}