status="";
video="";
function preload(){
    video=createVideo("");
    video.hide();
}
function setup(){
canvas=createCanvas(480,300);
canvas.center();
}
function draw(){
 image(video,0,0,480,300);
}
function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    video.loop();
    video.volume(0);
    video.speed(1);
}