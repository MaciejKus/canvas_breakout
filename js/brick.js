var bricks = [];
var level1 = [
  [0,0,1,1,1,1,1,1,0,0],
  [0,0,1,1,0,0,1,1,0,0],
  [0,0,1,1,1,1,1,1,0,0]
];
var level2 = [
  [0,0,1,1,1,1,1,1,0,0],
  [0,1,0,1,0,0,1,0,1,0],
  [0,0,1,1,0,0,1,1,0,0],
  [0,0,1,0,1,1,0,1,0,0]
];
var level3 = [
  [1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,0,1,1,1,1,1,0,0],
  [0,0,0,0,1,1,0,0,0,0]
];
var levels = [level1,level2,level3];
var bottomBrick = 0;

function Brick(x,y) {
  this.x = x;
  this.y = y;
}

Brick.prototype.width = canvas.width/10;
Brick.prototype.height = 25;
yOffset = canvas.height / 6;

Brick.prototype.draw = function() {
  context.beginPath();
  context.rect(this.x,this.y,this.width,this.height);
  context.fillStyle = 'yellow';
  context.fill();
  context.stroke();
}


//create bricks based on level array
function newLevel() {
  bottomBrick = 0;
  var level = levels[0];
  for (var c = 0; c < level.length; c++) {
    for (var r = 0; r < level[c].length; r++) {
      if (level[c][r] === 1) {
        var newBrickX = r*Brick.prototype.width;
        var newBrickY = c*Brick.prototype.height + yOffset;
        var newBrick = new Brick(newBrickX,newBrickY);
        bricks.push(newBrick);
        if(newBrick.y+newBrick.height > bottomBrick) bottomBrick = newBrick.y+ newBrick.height;
      }
    } //end for
  }//end for
  //move balls
  //flipBalls moves one ball left and one right
  var flipBalls = 1;
  for (c = 0, r = balls.length; c < r; c++) {
    balls[c].x = 300;
    balls[c].y=300;
    balls[c].dx = baseBallSpeed * flipBalls;
    balls[c].dy = baseBallSpeed;
    flipBalls *= -1;
  }
}
