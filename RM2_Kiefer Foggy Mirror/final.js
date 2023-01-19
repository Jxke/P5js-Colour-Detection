let faceapi; // variable to store faceapi
let detections = []; // returns from faceapi

let video;
let canvas;

let varWhite = 0;

function setup() {
  canvas = createCanvas(480, 360);
  canvas.id("canvas");

  video = createCapture(VIDEO);// Create the video
  video.id("video");
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

  clear();
  drawBoxes(detections);
  
  console.log(detections);
  faceapi.detect(gotFaces);
}

function draw(){

}

function drawBoxes(detections){
    if (detections.length > 0) {
        for (f=0; f < detections.length; f++){
            // let x = detections[f].alignedRect._box._x;
            // let y = detections[f].alignedRect._box._y;
            // let rectWidth = detections[f].alignedRect._box._width;
            // let rectHeight = detections[f].alignedRect._box._height;
            let {_x, _y, _width, _height} = detections[f].alignedRect._box;

            console.log(_height);

            //stroke(255,255,255);
            //strokeWeight(1);
            // noFill();
            // rect(_x,_y,_width,_height);

            let varFog = map(_height,200,120,255,0);
            background(255,255,255,varFog++);
            
        }
    }
}