let video;

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO); // Step 1: Instantiate the Video Capture
  video.size(640, 480); // Step 1: Instantiate the Video Size
  //the createCapture() function creates an HTML video tag
  //as well as pulls up image to be used in p5 canvas
  //hide() function hides the HTML video element
  video.hide(); // Step 1: Remove the additional HTML element created
}

function draw() {
  image(video, 0, 0); //Step 1: Drawing the Pixels
}

createCapture()