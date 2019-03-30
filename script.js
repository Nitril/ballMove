




// var width = canvas.width;           //współrzędna x
// var height = canvas.height;            //współrzędna y
// var dx = 2;                                 // wartość pixeli o ile ma się poruszać na osi x
// var dy = -2; 
// var gravity = 0.01;
//  var vx = 1;         // wartość pixeli o ile ma się poruszać na osi y
//  var vy = 1;  

// var frameRate = 1/40; // Seconds
// var frameDelay = frameRate * 1000; // ms
// var loopTimer = false;
// var ballRadius = 15;      // promień piłki
// var circleRadius = 50;
// var test = true;
// var mouseClicked = false, mouseReleased = true;       // zmienne do zapisania aktualnego stanu wciśnięcia myszki: wciśnięte/niewciśnięte 
// var rightPressed = false;
// var leftPressed = false;
// var upPressed = false;
// var downPressed = false;
// var ballSpeed = 0;
// var inter;
// var leci = false;





// var Cd = 0.47; // Dimensionless
// var rho = 1.22; // kg / m^3
// var A = Math.PI * ball.radius * ball.radius / (10000);
// var ag = 9.81;
// window.addEventListener("click", onMouseClick, false); 
//             // event listener do clicka
// //window.addEventListener("mousemove", onMouseMove, false);
// //window.addEventListener("deviceorientation", handleOrientation, true);
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);


// var intervals = [];
// function showMoves(param) {

  

//   if (intervals.length >1) {
    
//     intervals.forEach(clearInterval);
//     intervals = [];
    
//   }
//   else intervals.push(setInterval(move, param*100));
  
// }
// function onMouseClick(e) {
  
//     mouseClicked = !mouseClicked;          // mouse is clicked we change value to "true"
//     move(width, height);                          // rysujemy
//     mouse.position.x = e.clientX;
//     mouse.position.y = e.clientY;
//     move();
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//                 // przyspieszenie / opóźnienie
//     drawCircle(20, "silver", 700, 500);
//     // if (test == false) {
//     //   ctx.clearRect(0, 0, canvas.width, canvas.height);
//     //   move();
//     //   drawCircle(20, "silver", 700, 500);
//     // }
    

// }


// window.addEventListener("orientationchange", function() {
//   // Announce the new orientation number
    
// 	// alert(screen.orientation);
// }, false);

// function handleOrientation(event) {
//   var absolute = event.absolute;
//   var alpha    = event.alpha;
//   var beta     = event.beta;
//   var gamma    = event.gamma;

  
//   if(gamma >0) {
//     console.log("leci w PRAWO ")
    
//       move()
//       ball.position.x += dx;
//       //showMoves(gamma);
//       dx += dx;
//   }

//   if(gamma <0) {
    
//       console.log("leci w LEWO ")
      

//       move()
//       ball.position.x -= dx + dx;
//       dx -= dx;
//       //showMoves(-gamma);
     

//   }


//   if(beta <90) {
    
//     console.log("leci w GÓRĘ ")
    
//     move()
    
//     //showMoves(beta);
//     ball.position.y -= dy;
//     dy -= dy;
//   }

//   if(beta >90) {
    
//     console.log("leci w DÓŁ ")
    
//     move()
//     ball.position.y += dy;
//     dy += dy;
//     //showMoves(-beta);
    
    
//   }

  
  
  
// //   // Do stuff with the new orientation data
// // }

// function keyDownHandler(e) {



//   if(e.key == "Right" || e.key == "ArrowRight") {
//       rightPressed = true;
//       console.log("rightPressed " + rightPressed)
//       ball.position.x += ball.velocity.x;

     
      
//      // ballSpeed++;                          // rysujemy
//       //setInterval(move(x,y), ballSpeed); 
//       showMoves()
//                 // przyspieszenie / opóźnienie
      
//   }
//   if(e.key == "Left" || e.key == "ArrowLeft") {
//       leftPressed = true;
//       console.log("leftPressed " + leftPressed)
//       ball.position.x -= ball.velocity.x;
//       //ballSpeed--;                         // rysujemy
//       //setInterval(move, ballSpeed); 
//       showMoves()
//                 // przyspieszenie / opóźnienie
      
//   }
//   if(e.key == "Up" || e.key == "ArrowUp") {
//     upPressed = true;
//     console.log("upPressed " + upPressed)
//     ball.position.y += ball.velocity.y; 

//     //ballSpeed++;                     // rysujemy
//      // setInterval(move, ballSpeed); 
//       //move()
//                 // przyspieszenie / opóźnienie
//                 showMoves()
      
//   }
//   if(e.key == "Down" || e.key == "ArrowDown") {
//     downPressed = true;
//     console.log("downPressed " + downPressed)
//     ball.position.y -= ball.velocity.y;
//    // ballSpeed--;                      // rysujemy
//       //setInterval(move, ballSpeed); 
//       showMoves()
//                 // przyspieszenie / opóźnienie
      
//   }
  
// }

// function keyUpHandler(e) {
//   if(e.key == "Right" || e.key == "ArrowRight") {
//       rightPressed = false;
      
//       console.log("rightPressed " + rightPressed)
//   }
//   else if(e.key == "Left" || e.key == "ArrowLeft") {
//       leftPressed = false;
//       console.log("leftPressed " + leftPressed)
//   }
//   else if(e.key == "Up" || e.key == "ArrowUp") {
//     upPressed = false;
//     console.log("upPressed " + upPressed)
//   }
//   else if(e.key == "Down" || e.key == "ArrowDown") {
//     downPressed = false;
//     console.log("downPressed " + downPressed)
//   }
// }

// window.onload = function() {
//   // while(true) {
//   //   move()
//   // }                            
                                 
// };    
        

    
// function drawBall() {                            //rysowanie piłki
//     ctx.beginPath();
//     ctx.arc(ball.position.x, ball.position.y, ballRadius, 0, Math.PI * 2);                // rysowanie okręgu w punkcie x, y o promieniu ballRadius
//     ctx.fillStyle = "green";                        // kolor
//     ctx.fill();                                        
//     ctx.closePath();

//     ctx.restore();

// }


// function drawCircle(radius, ccolor, posX=x, posY=y) { 
  
//   //rysowanie piłki
//   //ctx.translate(ball.position.x, ball.position.y);
//   ctx.beginPath();
//   ctx.arc(0, 0, ball.radius, 0, Math.PI * 2, true);                // rysowanie okręgu w punkcie x, y o promieniu ballRadius
//   ctx.fillStyle = ccolor;                        // kolor
//   ctx.fill();                                        
//   ctx.closePath();
  
// }           

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.save();           // wyczyszczenie poprzedniego okręgu/koła
//   drawBall();
//   var trap = drawCircle(circleRadius, "silver", 700, 500);
  
//     //loopTimer = setInterval(move, frameDelay);
  
  
// }
// function move() {
    
//         //let tmp = 0; 
//                                                       // narysuj piłkę
      
//       /*if ((y + dy <= canvas.height-trap.posY-trap.circleRadius+ballRadius && 
//            y + dy >= trap.posY-trap.circleRadius+ballRadius ) && 
//            (x + dx  <= canvas.width-trap.posX-trap.circleRadius+ballRadius && 
//             x + dx  >= trap.posX-trap.circleRadius+ballRadius)) {

//                 console.log("AAAAAA KURWAAAAAA");

//       }*/
//       //console.log(trap.circleRadius + "////////////////" + trap.posX + "\\\\\\\\\\\\\\\\"  + trap.posY  );

//       /*if ((y + dy <= posY+ circleRadius && y + dy >= posY ) && (x + dx  <= (posX+circleRadius) && x + dx  >= posX)) {
//         //console.log("AAAAAA KURWAAAAAA AAAAAA KURWAAAAAA AAAAAA KURWAAAAAA AAAAAA KURWAAAAAA");

//       }*/
      
//       // if ((y + dy <= 500+ 50 && y + dy >= 500 ) && (x + dx  <= (700+50) && x + dx  >= 700))  {
//       //   console.log("Trafienie w dziurę hardcoded");
//       //   //win();
        
      
//       // if (ball.position.y + ball.velocity.y > canvas.height-ball.radius ||ball.position.y  + ball.velocity.y < ball.radius) {  //bounce from top and bottom frame
//       //   ball.velocity.y = -ball.velocity.y;
//       // }

//       // if(ball.position.x + ball.velocity.x > canvas.width-ball.radius || ball.position.x + ball.velocity.x < ball.radius) {   //bounce from right and left frame
//       //   ball.velocity.x = -ball.velocity.x;
//       // }
      
//           var Fx = -0.5 * Cd * A * rho * ball.velocity.x * ball.velocity.x * ball.velocity.x / Math.abs(ball.velocity.x);
//           var Fy = -0.5 * Cd * A * rho * ball.velocity.y * ball.velocity.y * ball.velocity.y / Math.abs(ball.velocity.y);
          
//           Fx = (isNaN(Fx) ? 0 : Fx);
//           Fy = (isNaN(Fy) ? 0 : Fy);
          
//               // Calculate acceleration ( F = ma )
//           var ax = Fx / ball.mass;
//           var ay = ag + (Fy / ball.mass);
//               // Integrate to get velocity
//           ball.velocity.x += ax*frameRate;
//           ball.velocity.y += ay*frameRate;
          
//             // Integrate to get position
//           ball.position.x += ball.velocity.x*frameRate*100;
//           ball.position.y += ball.velocity.y*frameRate*100;

//           if (ball.position.y > height - ball.radius) {
//             ball.velocity.y *= ball.restitution;
//             ball.position.y = height - ball.radius;
//           }
//           if (ball.position.x > width - ball.radius) {
//               ball.velocity.x *= ball.restitution;
//               ball.position.x = width - ball.radius;
//           }
//           if (ball.position.x < ball.radius) {
//               ball.velocity.x *= ball.restitution;
//               ball.position.x = ball.radius;
//           }
//           draw();  

//     }
  

// function win() {
//   test = false;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.font = "100px Arial";
//   ctx.fillStyle = "red";
//   ctx.textAlign = "center";
//   ctx.fillText("You fucked this!!!", canvas.width/2, canvas.height/2);
  
// }




var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

var width = canvas.width;           //współrzędna x
var height = canvas.height;          //współrzędna y

var ball = {
	position: {x: canvas.width/2, y: canvas.height/2},
	velocity: {x: 5, y: 5},
	mass: 0.1, //kg
	radius: 15, // 1px = 1cm
    restitution: -0.7,
    
    
};
window.addEventListener("deviceorientation", handleOrientation, true);

window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
      
       alert(screen.orientation);
  }, false);
  
  function handleOrientation(e) {
    var absolute = e.absolute;
    var alpha    = e.alpha;
    var beta     = e.beta;
    var gamma    = e.gamma;
    let tmp = 0;
    
    if(gamma >0) {
      console.log("leci w PRAWO ")
        ball.position.x += (ball.velocity.x);
        //showMoves(gamma);
        tmp++;
    }  
    if(gamma <0) {
        console.log("leci w LEWO ")
                 
        ball.position.x -= (ball.velocity.x);
        //tmp++;
        //showMoves(-gamma);
         
    } 
    if(beta <90) {
      
      console.log("leci w GÓRĘ ")
      
      //showMoves(beta);
      ball.position.y -= (ball.velocity.y);
        //tmp++;
    }  
    if(beta >90) {
      
      console.log("leci w DÓŁ ")
    
      ball.position.y -= (ball.velocity.y);
       // tmp++;
      //showMoves(-beta);
      
    }
    
}

window.onload = function() {
    // while(true) {
    //   move()
    // }                            
    setBoard();                         
  };


function drawCircle(radius, ccolor, posX=width/2, posY=height/2) { 
  
  //rysowanie piłki
  //ctx.translate(ball.position.x, ball.position.y);
  
  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, Math.PI * 2, true);                // rysowanie okręgu w punkcie x, y o promieniu ballRadius
  ctx.fillStyle = ccolor;                        // kolor
  ctx.fill();                                        
  ctx.closePath();
  console.log("KS: Narysowano okrąg")
  
}     

function drawBall() {                            //rysowanie piłki
    drawCircle(ball.radius, "green", ball.position.x, ball.position.y)
    //ctx.restore();
    ctx.restore();
}
function setBoard() {
    
    
    
    drawBall();
    
    loopTimer = setInterval(loop, 10);


}

var loop = function() {

    
    
    // ctx.clearRect(0,0,width,height);
    // 
    // ctx.translate(ball.position.x, ball.position.y);
    // ctx.beginPath();
    // ctx.arc(0, 0, ball.radius, 0, Math.PI*2, true);
    // ctx.fill();
    // ctx.closePath();
     
    //ctx.restore();
    if (ball.position.y + ball.radius > height-ball.radius ||ball.position.y  + ball.radius < ball.radius) {  //bounce from top and bottom frame
        ball.velocity.y = -ball.velocity.y;
      }

      if(ball.position.x + ball.radius > canvas.width-ball.radius || ball.position.x + ball.radius < ball.radius) {   //bounce from right and left frame
        ball.velocity.x = -ball.velocity.x;
      }

      ctx.clearRect(0, 0, width, height);
    
    //ctx.translate(ball.position.x, ball.position.y);
    drawBall();
    drawCircle((ball.radius*1.50), "silver", width-(3*ball.radius), height-(3*ball.radius));
    
}
