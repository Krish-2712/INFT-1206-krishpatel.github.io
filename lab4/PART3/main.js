// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// create a class named ball and the needed constructors

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velx;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // Now we start drawing the ball

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // update class for updating the co ordinates of the ball

  update(){
    if ((this.x + this.y)>= width){
      this.velX = -(this.velX);
    }

    if((this.x - this.size)<=0){
      this.velX = -(this.velX);
    }

    if((this.y + this.size)>= height){
      this.velY = -(this.velY);
    }

    if((this.y - this.size)<= 0){
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  // collision detect with the

  collisionDetect(){
    for (const ball of balls){
      if(this !== ball){
        const dx  = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx*dx + dy*dy)

        if(distance < this.size + ball.size){
          ball.color = randomRGB();
        }
      }
    }
  }
}

// created an array for the balls and give the constructor values as needed in the range
const balls = [];

while(balls.length < 25){
  const size = random(10,20);
  const ball = new Ball(
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    randomRGB(),
    size

  );
}