var maxEmotion = {
    "emotion": "none",
    "value": 100
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
    createCanvas(windowWidth, windowHeight);
    background(10);
}

function getColor(emotion) {
    switch (maxEmotion.emotion) {
        case "joy":
            return color(231, 203, 122, maxEmotion.value / 100 * 255);
        case "anger":
            return color(204, 60, 75, maxEmotion.value / 100 * 255);
        case "contempt":
            return color(215, 120, 131, maxEmotion.value / 100 * 255);
        case "disgust":
            return color(215, 109, 150, maxEmotion.value / 100 * 255);
        case "surprise":
            return color(0, 165, 205, maxEmotion.value / 100 * 255);
        case "sadness":
            return color(54, 115, 172, maxEmotion.value / 100 * 255);
        case "fear":
            return color(83, 153, 92, maxEmotion.value / 100 * 255);
        default:
            return color(255, 255, 255, maxEmotion.value / 100 * 255);
    }
}

function draw() {
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
    var size = maxEmotion.value / 100 * 255,
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