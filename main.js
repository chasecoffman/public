var sq;
var feed = []; // an empty array
var numFood = 10;

var a = [1,2,3];

function setup() {
    createCanvas(740, 480);
    sq = new Squirrel();

    // initializing 10 pieces of food
    var p = int(random(0,numFood));
    for(var i = 0; i < numFood; i++) {
        if(i === p) {
            var food = new Food(random(width), random(height));
            food.poisonous = true;
            feed.push(food);
        } else {
            feed.push(new Food(random(width), random(height)));
        }
    }
}

function draw() {
    background(0,255,0);
    sq.display();
    
    // display all the food
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
    
    text("Food remaing: " + feed.length, 100, 50);
}

function mousePressed() {
    sq.eat();
    
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.foodSize = 50;
    this.poisonous = false;
    
    this.display = function() {
        if(this.poisonous) {
            fill(255,0,255);
        } else {
            fill(255,0,0);
        }
        
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Squirrel() {
    // instance variables
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;

    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function() {
        for(var i = 0; i < feed.length; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            
            if(r1 + r2 > d) {
                if(food.poisonous) {
                    window.alert("You have died!");
                }
                feed.splice(i,1);
            }
        }
    }
    
    this.display = function() {   
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
    fill('#FFFFFF');
    ellipse(x + 42, y - 26, 60, 32);

    //pupilLeft;
    fill('#bab000')
    ellipse(x + 42, y - 26, 32, 32);

    //eyeRight;
    fill('#FFFFFF');
    ellipse(x - 42, y - 26, 60, 32);

    //pupilRight;
    fill('#bab000')
    ellipse(x - 42, y - 26, 32, 32);

    //mouth
    if(mouseIsPressed) {
        fill(0);
        ellipse(x, y + 45, 60, 35);
    } else {
        fill('#9a7500');
        triangle(x, y + 20, x - 20, y + 40, x, y + 30);
        triangle(x, y + 20, x + 20, y + 40, x, y + 30);
    }
    }
}
