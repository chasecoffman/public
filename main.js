var cat;
var feed = []; // an empty array
var numFood = 10;
var score = 0;

var a = [1, 2, 3];

function setup() {
  createCanvas(740, 480);
  textSize(32);
  cat = new Kitten();

  // initializing 10 pieces of food
  var p = int(random(0, numFood));
  for (var i = 0; i < numFood; i++) {
    if (i === p) {
      var food = new Food(random(width), random(height));
      food.poisonous = true;
      feed.push(food);
    } else {
      feed.push(new Food(random(width), random(height)));
    }
  }
}

function draw() {
  background(0, 255, 0);
  cat.display();

  // display all the food
  for (var i = 0; i < feed.length; i++) {
    feed[i].display();
  }

  text("Score: " + score, 10, 25);
}

function mousePressed() {
  cat.eat();
  feed.push(new Food(random(width), random(height)));
}

function Food(x, y) {
  this.x = x;
  this.y = y;
  this.foodSize = 50;
  this.poisonous = false;

  this.display = function () {
    if (this.poisonous) {
      fill(107, 57, 57);
    } else {
      fill(107, 57, 57);
    }

    ellipse(this.x, this.y, this.foodSize, this.foodSize);
  }
}

function Kitten() {
  // instance variables
  var x = mouseX;
  var y = mouseY;
  var diameter = 200;
  this.poisonous = false;

  this.getDistance = function (other) {
    var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
    return dist;
  }

  this.eat = function () {
    for (var i = 0; i < feed.length; i++) {
      var food = feed[i];
      var d = this.getDistance(food);
      var r1 = food.foodSize / 2;
      var r2 = diameter / 2;

      if (r1 + r2 > d) {
        if (food.poisonous) {
          window.alert("You have died!");
          console.log('poison!');
          Kitten.poisonous = true;
          setTimeout(function() {
            Kitten.poisonous = false;
          }, 2000);
          score = 0;
        }
        feed.splice(i, 1);
        score++;
      }
    }
  }
  
  this.display = function () {
    background(255);
    x = mouseX;
    y = mouseY;

    // earLeft;
    fill('#282828');
    triangle(x - 25, y - 90, x - 90, y - 20, x - 80, y - 120);

    // earRight;
    fill('#282828');
    triangle(x + 25, y - 90, x + 90, y - 20, x + 80, y - 120);

    // face
    noStroke();
    fill('#2d2d2d');
    ellipse(x, y, 200, 200);

    //nose
    fill('#EFB8D2');
    triangle(x + 20, y + 5, x - 20, y + 5, x, y + 20);

    //eyeLeft;
    if (Kitten.poisonous) {
      fill('#4286f4');
      rect(x + 48, y - 26, 5, 105);
      fill('#FFFFFF');
      rect(x + 32, y - 26, 40, 5);
    } else {
      fill('#FFFFFF');
      ellipse(x + 42, y - 26, 60, 32);
    }

    //pupilLeft;
    if (!Kitten.poisonous) {
      fill('#bab000')
      ellipse(x + 42, y - 26, 32, 32);
    }

    //eyeRight;
    if (Kitten.poisonous) {
      fill('#4286f4');
      rect(x - 48, y - 26, 5, 105);
      fill('#FFFFFF');
      rect(x - 68, y - 26, 40, 5);
    } else {
      fill('#FFFFFF');
      ellipse(x - 42, y - 26, 60, 32);
    }

    //pupilRight;
    if (Kitten.poisonous) {

    } else {
      fill('#bab000')
      ellipse(x - 42, y - 26, 32, 32);
    }
    //mouth
    if (mouseIsPressed) {
      fill(0);
      ellipse(x, y + 45, 60, 35);
    } else {
      fill('#9a7500');
      triangle(x, y + 20, x - 20, y + 40, x, y + 30);
      triangle(x, y + 20, x + 20, y + 40, x, y + 30);
    }
  }
}
