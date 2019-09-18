var maxEmotion = {
    "emotion": "none",
    "value": 0
};

var color_joy = "#E7CB7A";
var color_anger = "#CC3C4B";
var color_contempt = "#D77883";
var color_disgust = "#D76D96";
var color_surprise = "#00A5CD";
var color_sadness = "#3673AC";
var color_fear = "#53995C";
var color_none = "#FFFFFF";

function setup() {
    createCanvas(710, 400, WEBGL);
}

function getColor(emotion) {
    switch (maxEmotion.emotion) {
        case "joy":
            return color_joy;
        case "anger":
            return color_anger;
        case "contempt":
            return color_contempt;
        case "disgust":
            return color_disgust;
        case "surprise":
            return color_surprise;
        case "sadness":
            return color_sadness;
        case "fear":
            return color_fear;
        default:
            return color_none;
    }
}

function draw() {
    background(250);
    fill(getColor(maxEmotion));
    square(50, 50, 100, 100);

    /*
    
    translate(-240, -100, 0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    plane(70);
    pop();

    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(70, 70, 70);
    pop();

    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(70, 70);
    pop();

    translate(-240 * 2, 200, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(70, 70);
    pop();
    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 20);
    pop();

    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(70);
    pop();
    */
}