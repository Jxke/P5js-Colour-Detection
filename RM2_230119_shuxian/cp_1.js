let faceapi; // variable to store faceapi

let video; 
let canvas; 

function setup() {
  canvas = createCanvas(480, 360);

  video = createCapture(VIDEO);// Create the video
  video.size(width, height);

  // 3 Arguments for the API to reference in and out
  faceapi = ml5.faceAPi("Input for Machine Learning Algo", "Configurations","Callback Functions: Execution from the API")
}

function draw(){
  
}