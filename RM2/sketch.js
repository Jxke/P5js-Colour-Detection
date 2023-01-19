let faceapi; //variable to store the api
let detections = []; //variable to store anything that returns from the api

let video;
let canvas;

function setup() {
    canvas = createCanvas(480, 360);

    video = createCapture(VIDEO);
    video.size(width,height);

    faceapi = ml5.faceApi(video,_____,____)

}

function draw() {

}