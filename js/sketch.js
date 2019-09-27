var maxEmotion = {
    "emotion": "none",
    "value": 100
};

var color_joy = ["#FF7337", "#FF8A00", "#FFBB55"];
var color_anger = ["#E40000", "#FF5353", "#FF9B9B"];
var color_contempt = ["#878787", "#D4D4D4", "#F4F4F4"];
var color_disgust = ["#53995C", "#3FC250", "#B4DEB9"];
var color_surprise = ["#FFD600", "#FFE662", "#FDFFAF"];
var color_sadness = ["#0044A9", "#5E8BCE", "#B9D5FF"];
var color_fear = ["#7D00A9", "#A466BA", "#E0A9F3"];

function setup() {
    var myCanvas = createCanvas($("#sketch-div").width(), $("#sketch-div").height());
    myCanvas.parent("sketch-div");
    background(255);
    frameRate(5);
}

function getColor(emotion) {
    if (maxEmotion.value <= 10) return color("#FFFFFF");
    switch (maxEmotion.emotion) {
        case "joy":
            return (maxEmotion.value > 70? color_joy[0] : maxEmotion.value > 40 ? color_joy[1] : color_joy[2]);
        case "anger":
            return (maxEmotion.value > 70? color_anger[0] : maxEmotion.value > 40 ? color_anger[1] : color_anger[2]);
        case "contempt":
            return (maxEmotion.value > 70? color_contempt[0] : maxEmotion.value > 40 ? color_contempt[1] : color_contempt[2]);
        case "disgust":
            return (maxEmotion.value > 70? color_disgust[0] : maxEmotion.value > 40 ? color_disgust[1] : color_disgust[2]);
        case "surprise":
            return (maxEmotion.value > 70? color_surprise[0] : maxEmotion.value > 40 ? color_surprise[1] : color_surprise[2]);
        case "sadness":
            return (maxEmotion.value > 70? color_sadness[0] : maxEmotion.value > 40 ? color_sadness[1] : color_sadness[2]);
        case "fear":
            return (maxEmotion.value > 70? color_fear[0] : maxEmotion.value > 40 ? color_fear[1] : color_fear[2]);
        default:
            return color("#FFFFFF");
    }
}

function draw() {
    //resizeCanvas($("#sketch-div").width(), $("#sketch-div").height(), true);
    splashDot();
}

function mousePressed() {

    //splashDot();
    // prevent default
    return false;
}

function splashDot() {
    fill(getColor(maxEmotion));
    noStroke();  // Don't draw a stroke around shapes
    var size = (maxEmotion.value > 50 ? maxEmotion.value : 50) / 400 * 255,
        offsetX,
        offsetY,
        plusOrMinus;

    var locX = random(0, width);
    var locY = random(0, height);
    ellipse(locX, locY, size, size);
    for (var i = 0; i < 10; i++) {
        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        offsetX = (random(size)) * plusOrMinus;
        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        offsetY = (random(size)) * plusOrMinus;
        var newSize = random(size) / 2;
        ellipse(locX + offsetX, locY + offsetY, newSize, newSize);
        //console.log(floor(randomGaussian(0, 15)));
    }
}

function splashLine() {
    fill(getColor(maxEmotion));
    noStroke();  // Don't draw a stroke around shapes
    var size = maxEmotion.value / 100 * 255,
        offsetX,
        offsetY,
        plusOrMinus;
    ellipse(mouseX, mouseY, size, size);
    for (var i = 0; i < 10; i++) {
        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        offsetX = (random(size)) * plusOrMinus;
        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        offsetY = (random(size)) * plusOrMinus;
        var newSize = random(size) / 2;
        ellipse(mouseX + offsetX, mouseY + offsetY, newSize, newSize);
        //console.log(floor(randomGaussian(0, 15)));
    }
}

/*
function getColor() {
    var rRed = Math.floor((Math.random() * 255) + 1),
        rBlue = Math.floor((Math.random() * 255) + 1),
        rGreen = Math.floor((Math.random() * 255) + 1);
    return color(rRed, rBlue, rGreen, 255);
}
*/

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}