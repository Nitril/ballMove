var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

var width = canvas.width;           //współrzędna x
var height = canvas.height;          //współrzędna y
var gravity = 0.02;
var ball = {
	position: {x: 100, y: 100},
	velocity: {x: 5, y: 5},
	mass: 0.1, //kg
	radius: 15, // 1px = 1cm
  restitution: -0.7
    
    
};

window.addEventListener("deviceorientation", handleOrientation, true);

window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
      
    //alert(screen.orientation);
  }, false);
  
  function handleOrientation(e) {
    var absolute = e.absolute;
    var alpha    = e.alpha;
    var beta     = e.beta;
    var gamma    = e.gamma;
    
        ball.position.x += gamma;
        ball.position.y += beta;
        
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

    if (ball.position.x+ball.radius > width) {
      
      ball.position.x = width-ball.radius;
    }
    else if ((ball.position.x-ball.radius < 0)) {
      ball.position.x = ball.radius;
    }
    if (ball.position.y+ball.radius > height) {
      
      ball.position.y = height-ball.radius;
    }
    else if ((ball.position.y-ball.radius < 0)) {
      ball.position.y = ball.radius;
    }
    
    drawCircle(ball.radius, "green", ball.position.x, ball.position.y);
    console.log("KS X: "+ ball.position.x +" Y: "+ ball.position.y);
    
    ctx.restore();
}
function setBoard() {
    
    drawBall();
    loopTimer = setInterval(loop, 5);
}

var loop = function() {
    ctx.clearRect(0, 0, width, height);
    ball.velocity.y += gravity;
    ball.position.x += ball.velocity.x ;
    ball.position.y += ball.velocity.y;

    //ctx.translate(ball.position.x, ball.position.y);
    drawBall();
    drawCircle((ball.radius*1.50), "silver", width-(3*ball.radius), height-(3*ball.radius));
}
