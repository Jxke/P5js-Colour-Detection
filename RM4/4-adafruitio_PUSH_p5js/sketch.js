// ---------------------------------------------------------------- //
// DM2007 RM3 ESP8266 Lesson
// Re-written by Jake Tan
// Using Arduino IDE 1.8.19, Visual Studio Code 2019
// Using NodeMCU ESP8266 1.0 (ESP 12-E)
// Tested on February 2023
// ---------------------------------------------------------------- //

// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/Jxke/feeds/words/data';
// some variables
let noiseval = 0.0;
let counter = 0;

function setup() {
  createCanvas(255, 255);
}

function draw() {
  fill(255, 10);
  rect(0, 0  , width, height);
  // generate a new position for the circle
  noiseval = noiseval + 0.05; 
  let data = floor(noise(noiseval) * 255);
  // draw the circle
  stroke(10, 50);
  noFill();
  ellipse(data, height / 2, 50, 50);
  
  // the sketch will roughly try to run at 60fps
  // this counter limits the rate at which new data is 
  // sent to the remote server to roughly once every 3 seconds
  if (counter % 180 == 0) {
    console.log("Value to send: " + data);
    noStroke();
    fill(255, 0, 0);
    ellipse(data, height / 2, 25, 25);
    
    sendShit(data); // function to send the data
  }
  counter++;
}

function sendShit(theShit) {
  // we communicate as key value pairs.
  // the data we're sending is the data and the key that IDs me as the sender
  // don't post your key publically ;)
  let postData = {
    "value": theShit,
    "X-AIO-Key": "IOKEY"
  };
  // make a POST call to the adafruit.io server
  // httpPOST take a couple arguments. The URL to post to,
  // what kind so data is being sent, the data to send,
  // and a callback function when it's complete/
  httpPost(url, 'json', postData, function(result) {
    console.log(result) // print the returned data when complete 
  });
}