let faceapi; //variable to store the api
let detections = []; //variable to store anything that reutnrs from the api

let video;
let canvas;

let rectHeight;

function setup() {
    canvas = createCanvas(480,360);
    canvas.id("canvas");

    video = createCapture(VIDEO);
    video.size(width,height);
    video.id("video");

    const faceOptions = {
        withLandmarks: true,
        withExpressions: true,
        withDescriptors: true,
        minConfidence: 0.5 //threshold for result
    };

    faceapi = ml5.faceApi(video, faceOptions, faceReady) //input, config, call back function

}

function faceReady(){
    faceapi.detect(gotFaces);
}

function gotFaces(error,result){
    if(error){
        console.log(error);
        return;
    }
    detections = result;

    clear();
    drawBoxes(detections);

    console.log(detections);
    faceapi.detect(gotFaces);
}

function drawBoxes(detections){
    if(detections.length >0){
        for(f=0; f < detections.length; f++){
            // let x = detections[f].alignedRect._box._x;
            // let y = detections[f].alignedRect._box._y;
            rectWidth = detections[f].alignedRect._box._width;
            rectHeight = detections[f].alignedRect._box._height;

            let {_x, _y, _width, _height} = detections[f].alignedRect.box;
        
            fill(255,255,255,rectHeight-5);
            noStroke();
            rect(0, 0, 480, 360);
            }
        }
}

function draw() {

}