let faceapi; //var to store API
let detections = []; //var to store anything returning from API

let video;
let canvas;

let varFog;

function setup() {
    canvas = createCanvas(480, 360);
    canvas.id("canvas");

    video = createCapture(VIDEO);
    video.id("video");
    video.size(width, height);
    const faceOptions = {
        withLandmarks: true,
        withExpressions: true,
        withDescriptors: true,
        minConfidence: 0.5 //threshold for result
      };
    
      faceapi = ml5.faceApi(video, faceOptions, faceReady); //input, config, callback

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
    faceapi.detect(gotFaces);

    clear();
    drawBoxes(detections);
  }

function draw(){
    
  }  

  function drawBoxes(detections){
    if (detections.length > 0) {
        for (f=0; f<detections.length; f++){ //condition, origin, what happens if origin doesnt hit condition
            // let x = detections[f].alignedRect._box._x;
            // let y = detections[f].alignedRect._box._y;
            // let rectWidth = detections[f].alignedRect._box._width;
            // let rectHeight = detections[f].alignedRect._box._height;

            let {_x, _y, _width, _height} = detections[f].alignedRect._box;
            

            // stroke(255,255,255,varWhite++);
            // strokeWeight(1);
            // noFill();
            // rect(_x,_y,_width,_height);

            let varFog = map(_height, 200, 90, 255, 0);
            background(255,255,255,varFog++);


        }

    
    }
  }