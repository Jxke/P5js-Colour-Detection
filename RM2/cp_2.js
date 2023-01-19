let faceapi; // variable to store faceapi
let detections = []; // returns from faceapi

let video;
let canvas;

function setup() {
  canvas = createCanvas(480, 360);

  video = createCapture(VIDEO);// Create the video
  video.size(width, height);
  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5 //threshold for result
  };

  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

function faceReady() {
  faceapi.detect(gotFaces);// Start detecting faces
}

// Get faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  detections = result; //Now all the data in this detections
  console.log(detections);
}

function draw(){
 
}