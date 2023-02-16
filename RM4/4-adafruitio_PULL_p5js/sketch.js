// ---------------------------------------------------------------- //
// DM2007 RM3 ESP8266 Lesson
// Re-written by Jake Tan
// Using Arduino IDE 1.8.19, Visual Studio Code 2019
// Using NodeMCU ESP8266 1.0 (ESP 12-E)
// Tested on February 2023
// ---------------------------------------------------------------- //

// URL to retreive data. Mine is public so anyone can get it
let url = 'https://io.adafruit.com/api/v2/Jxke/feeds/words';
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(255, 10);
  rect(0, 0, width, height);
  // only pull this every once in awhile
  if (counter % 180 == 0) {
    getData(); // function for calling data
  }
  counter++;
}

function getData() {
  let data;  // local var to get last value
  // this calls a GET function, which requests a URL
  // the arguments are the url to request, the kind of data to expect,
  // and a callback function once the data is ready
  httpGet(url, 'json', function(response) {
    console.log(response);
    data = response.last_value; // store the data we're interested in
    // draw an ellipse
    noStroke();
    fill(255, 0, 0);
    ellipse(data, height / 2, 25, 25);
    // print out the data we're keen to see
    console.log(data);
  });
}