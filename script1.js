var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

var width = canvas.width;           //współrzędna x
var height = canvas.height;          //współrzędna y

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
    //let tmp = 1;
    
    // if(alpha > 0 || gamma >0) {
    //     console.log("leci w PRAWO  " + absolute);
    
        ball.position.x += gamma;
        //ball.position.y += beta;
        
        //showMoves(gamma);
        //tmp++;
        
    //}  
    //if(alpha < 0 || gamma <0) {
        //console.log("leci w LEWO ");
                 
        //ball.position.x -= ball.velocity.x;
        //tmp++;
        //showMoves(-gamma);
         
    //} 
    // if(beta <90) {
      
    //   console.log("leci w GÓRĘ ")
      
    //   //showMoves(beta);
    //   ball.position.y -= (ball.velocity.y);
    //     //tmp++;
    // }  
    // if(beta >90) {
      
    //   console.log("leci w DÓŁ ")
    
    //   ball.position.y -= (ball.velocity.y);
    //    // tmp++;
    //   //showMoves(-beta);
      
    // }
    
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
    drawCircle(ball.radius, "green", ball.position.x, ball.position.y);
    console.log("KS X: "+ ball.position.x +" Y: "+ ball.position.y);
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
    /*if (ball.position.y+ball.radius > height-ball.radius ||ball.position.y-ball.radius   < ball.radius) {  //bounce from top and bottom frame
        ball.velocity.y = -ball.velocity.y;
      }*/
      if(ball.position.x + ball.radius > canvas.width || ball.position.x - ball.radius < ball.radius) {   //bounce from right and left frame
        ball.velocity.x = -ball.velocity.x;
      }
      

      ctx.clearRect(0, 0, width, height);
    
    //ctx.translate(ball.position.x, ball.position.y);
    drawBall();
    drawCircle((ball.radius*1.50), "silver", width-(3*ball.radius), height-(3*ball.radius));
}
