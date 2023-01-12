function setup() {
    createCanvas(400, 300);
    // background(0); //Step 3: Call BG once to create trail
}

function draw() {
    background(255); // Step 1: Drawing the Background
    noStroke();
    fill(0);
    circle(200, 150, 20); // Step 1: Drawing the Circle
    // circle(mouseX, mouseY,24); // Step 2: Manipulating the Circle's Pos
}

// Step 4: Erase all when clicking
// function mousePressed(){
//     background(0);
// }