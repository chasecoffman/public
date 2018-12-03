function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = mouseX;
    var y = mouseY;

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
    fill('#a0a0a0');
    triangle(x, y + 20, x - 20, y + 40, x, y + 30);
    triangle(x, y + 20, x + 20, y + 40, x, y + 30);
}
