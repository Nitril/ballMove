
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var x = canvas.width/2;           //współrzędna x
var y = canvas.height/2;            //współrzędna y
var dx = 2;                                 // wartość pixeli o ile ma się poruszać na osi x
var dy = -2;          // wartość pixeli o ile ma się poruszać na osi y
var ballRadius = 15;      // promień piłki
var circleRadius = 50;
var test = true;
//var mouseClicked = false, mouseReleased = true;       // zmienne do zapisania aktualnego stanu wciśnięcia myszki: wciśnięte/niewciśnięte 
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var ballSpeed = 0;
var inter;
var leci = false;
//window.addEventListener("click", onMouseClick, false); 
            // event listener do clicka
//window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("deviceorientation", handleOrientation, true);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


var intervals = [];
function showMoves(param) {

  

  if (intervals.length >1) {
    
    // intervals.forEach(clearInterval);
    // intervals = [];
    
  }
  else intervals.push(setInterval(move, param*100));
  
}
function onMouseClick(e) {
  
    mouseClicked = !mouseClicked;          // mouse is clicked we change value to "true"
    //move(x, y);                          // rysujemy
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
                // przyspieszenie / opóźnienie
    drawCircle(20, "silver", 700, 500);
    // if (test == false) {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   move();
    //   drawCircle(20, "silver", 700, 500);
    // }
    

}


window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  
  
  
	// alert(screen.orientation);
}, false);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  
  if(gamma >0) {
    console.log("leci w PRAWO ")
    
      
      move()
      x += dx;
      //showMoves(gamma);
      
  }

  if(gamma <0) {
    
      console.log("leci w LEWO ")
      
      move()
      x -= dx;
      //showMoves(-gamma);
     

  }


  if(beta <90) {
    
    console.log("leci w GÓRĘ ")
    
    move()
    //showMoves(beta);
    y -= dy;
  }

  if(beta >90) {
    
    console.log("leci w DÓŁ ")
    
    move()
    y += dy;
    //showMoves(-beta);
    
    
  }

  
  
  
  // Do stuff with the new orientation data
}
// switch (e.key)  {


//   case "Right" || "ArrowRight":
//     rightPressed = true;
//     console.log("rightPressed " + rightPressed)
//   break;
//   case "Left" || "ArrowLeft":
//     leftPressed = true;
//     console.log("leftPressed " + leftPressed)
//   break;
//   case "Up" || "ArrowUp":
//     upPressed = true;
//     console.log("upPressed " + upPressed)
//   break;
//   case "Down" || "ArrowDown":
//     upPressed = true;
//     console.log("downPressed " + downPressed)
//   break;
  
//   default: 
//   console.log("ALE JOJJJJJJOOOOOOOOOO");
// }

function keyDownHandler(e) {



  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
      console.log("rightPressed " + rightPressed)
      x += dx;
      move()
     // ballSpeed++;                          // rysujemy
      //setInterval(move(x,y), ballSpeed); 
      
                // przyspieszenie / opóźnienie
      
  }
  if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
      console.log("leftPressed " + leftPressed)
      x -= dx;
      //ballSpeed--;                         // rysujemy
      //setInterval(move, ballSpeed); 
      move()
                // przyspieszenie / opóźnienie
      
  }
  if(e.key == "Up" || e.key == "ArrowUp") {
    upPressed = true;
    console.log("upPressed " + upPressed)
    y += dy; 
    //ballSpeed++;                     // rysujemy
     // setInterval(move, ballSpeed); 
      move()
                // przyspieszenie / opóźnienie
      
      
  }
  if(e.key == "Down" || e.key == "ArrowDown") {
    downPressed = true;
    console.log("downPressed " + downPressed)
    y -= dy;
   // ballSpeed--;                      // rysujemy
      //setInterval(move, ballSpeed); 
      move()
                // przyspieszenie / opóźnienie
      
  }
  
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
      
      console.log("rightPressed " + rightPressed)
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
      console.log("leftPressed " + leftPressed)
  }
  else if(e.key == "Up" || e.key == "ArrowUp") {
    upPressed = false;
    console.log("upPressed " + upPressed)
  }
  else if(e.key == "Down" || e.key == "ArrowDown") {
    downPressed = false;
    console.log("downPressed " + downPressed)
  }
}

window.onload = function() {
  // while(true) {
  //   move()
  // }                            
                                 
};    
        

    
function drawBall() {                            //rysowanie piłki
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);                // rysowanie okręgu w punkcie x, y o promieniu ballRadius
    ctx.fillStyle = "green";                        // kolor
    ctx.fill();                                        
    ctx.closePath();

}


function drawCircle(radius, ccolor, posX=x, posY=y) { 
  //this.posY = posY;
  //this.posX = PosX;
  //rysowanie piłki
  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, Math.PI * 2);                // rysowanie okręgu w punkcie x, y o promieniu ballRadius
  ctx.fillStyle = ccolor;                        // kolor
  ctx.fill();                                        
  ctx.closePath();

}           

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);           // wyczyszczenie poprzedniego okręgu/koła
  drawBall();
  var trap = drawCircle(circleRadius, "silver", 700, 500);
  
  
  
}
function move(width = canvas.width/2, height = canvas.height/2) {
      
      let tmp = 0; 
      draw();                                                // narysuj piłkę
      
      /*if ((y + dy <= canvas.height-trap.posY-trap.circleRadius+ballRadius && 
           y + dy >= trap.posY-trap.circleRadius+ballRadius ) && 
           (x + dx  <= canvas.width-trap.posX-trap.circleRadius+ballRadius && 
            x + dx  >= trap.posX-trap.circleRadius+ballRadius)) {

                console.log("AAAAAA KURWAAAAAA");



      }*/
      //console.log(trap.circleRadius + "////////////////" + trap.posX + "\\\\\\\\\\\\\\\\"  + trap.posY  );

      /*if ((y + dy <= posY+ circleRadius && y + dy >= posY ) && (x + dx  <= (posX+circleRadius) && x + dx  >= posX)) {
        //console.log("AAAAAA KURWAAAAAA AAAAAA KURWAAAAAA AAAAAA KURWAAAAAA AAAAAA KURWAAAAAA");

      }*/
      
      if ((y + dy <= 500+ 50 && y + dy >= 500 ) && (x + dx  <= (700+50) && x + dx  >= 700))  {
            console.log("Trafienie w dziurę hardcoded");
            //win();
            
      }
      if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {  //bounce from top and bottom frame
         dy = -dy;
      }

      if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {   //bounce from right and left frame
        dx = -dx;
      }
      
      
      x += dx;
      y += dy;
        
      
      
      
      
    }
                                     //zaktualizowanie wartości y  
      //console.log(x + " " + y)



function win() {
  test = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "100px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("You fucked this!!!", canvas.width/2, canvas.height/2);
  
}



// function ballSpeed(ballspd , functn=move) {

//   setInterval(move, ballspd);
