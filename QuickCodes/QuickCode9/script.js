var toppos = 300;
var leftpos = 600;
var y = 0;
var x = 0;
var size = 0;
var random = 1;
var ballnumber = 2;
var targeted = 1;

function left() {
    leftpos = leftpos - 20;
    if (leftpos < 130) {leftpos = leftpos + 20; }
    else {
    document.getElementById('ball' + targeted).style.left = leftpos - y + "px";
    }
    
}
function right() {
    leftpos = leftpos + 20;
    if (leftpos > 1040 - size) {leftpos = leftpos - 20;}
    else {
    document.getElementById('ball' + targeted).style.left = leftpos - y + "px";
    }
    
}
function up() {
    toppos = toppos - 20;
    if (toppos < 20) {toppos = toppos + 20; }
    else {
    document.getElementById('ball' + targeted).style.top = toppos + "px";
    }
}

function down() {
    toppos = toppos + 20;
    if (toppos > 600 - size) {toppos = toppos - 20;}
    else {
    document.getElementById('ball' + targeted).style.top = toppos + "px";
    }
}

function circle() {
    document.getElementById('ball' + targeted).style.borderRadius = "50%";
}
function square() {
    document.getElementById('ball' + targeted).style.borderRadius = "0";
}

function goUp() {
    x = x + 10;
    y = y + 10;
    if (y == 100) {
        y = y - 10;
        x = x - 10;
    }
    else {
        document.getElementById('ball' + targeted).style.left = leftpos - y + "px";
        document.getElementById('ball' + targeted).style.top = toppos - x + "px";
        document.getElementById('ball' + targeted).style.boxShadow = y + "px " + x + "px " + y + "px";
    }
}
function goDown() {
    x = x - 10;
    y = y - 10;
    if (y < 0) {
        x = 0;
        y = 0;
    }
    else {
        document.getElementById('ball' + targeted).style.left = leftpos - y + "px";
        document.getElementById('ball' + targeted).style.top = toppos - x + "px";
        document.getElementById('ball' + targeted).style.boxShadow = y + "px " + x + "px " + y + "px";
    }
}
function grow() {
    if (size < 200) {
        if (leftpos <= 1000 - size) {
            if (toppos <= 600 - size) {
            size = size + 10;
            document.getElementById('ball' + targeted).style.height = size + 100 + 'px';
            document.getElementById('ball' + targeted).style.width = size + 100 + 'px';
            }
        }
    }
}
function shrink() {
    if (size > -80) {
        size = size - 10;
        document.getElementById('ball' + targeted).style.height = size + 100 + 'px';
        document.getElementById('ball' + targeted).style.width = size + 100 + 'px';
    }
}
function weird() {
    if (random == 1) {
        document.getElementById('ball' + targeted).style.animation = 'random 20s linear infinite';
        document.getElementById('ball' + targeted).style.left = '590px';
        document.getElementById('ball' + targeted).style.top = '300px';
        random = 2;
    }
    else {
        document.getElementById('ball' + targeted).style.left = leftpos - y + "px";
        document.getElementById('ball' + targeted).style.top = toppos + "px";
        document.getElementById('ball' + targeted).style.height = size + 100 + 'px';
        document.getElementById('ball' + targeted).style.width = size + 100 + 'px';
        random = 1;
        document.getElementById('ball' + targeted).style.animation = 'none';
    }
    
}

function create() {
    if (ballnumber <= 5) {
        document.getElementById('field').innerHTML = document.getElementById('field').innerHTML + '<div class="ball" id="ball' + ballnumber + '" onclick="targetCertain(' + ballnumber + ')"><h1>' + ballnumber + '</h1></div>';
        ballnumber = ballnumber + 1;
    }
}
function target() {
    if (targeted == ballnumber - 1) {
        targeted = 1;
        document.getElementById('xray').innerHTML = targeted;
    }
    else {
        targeted = targeted + 1;
        document.getElementById('xray').innerHTML = targeted;
    }
}
function targetCertain(divNum) {
    targeted = divNum;
    document.getElementById('xray').innerHTML = targeted;
}
function refresh() {
    document.getElementById('field').innerHTML = '<div class="ball" id="ball1" onclick="targetCertain(1)"><h1>1</h1></div>';
    toppos = 300;
    leftpos = 600;
    y = 0;
    x = 0;
    size = 0;
    random = 1;
    ballnumber = 2;
    targeted = 1;
}
function color() {
    var colour = document.getElementById('TextBox').value;
    document.getElementById('ball' + targeted).style.backgroundColor = colour;
    document.getElementById('TextBox').value = "Enter Color/Hexcode Here!";
}
function displayNone(divId) {
    document.getElementById(divId).value = "";
}
