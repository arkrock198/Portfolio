//switching between games--------------------------------------------------------------
var hearts = 5;
var p1Hearts = 5;
var p2Hearts = 5;
var popupIsUp = false;
var p1wins = 0;
var p2wins = 0;
var playing = false;

function popup(winner) {
    "use strict";
    document.getElementById("popup").style.visibility = "visible";
    if (winner === "Player") {
        document.getElementById("winner").innerHTML = "You win!";
        p1wins = p1wins + 1;
        document.getElementById('p1wins').innerHTML = p1wins;
    } else {
        document.getElementById("winner").innerHTML = "You lose.";
        p2wins = p2wins + 1;
        document.getElementById('p2wins').innerHTML = p2wins;
    }
    setTimeout(function(){
        playing = false;
        popupIsUp = true;
    }, 1500);
}
function PopupRemove() {
    "use strict";
    popupIsUp = false;
    document.getElementById("popup").style.visibility = "hidden";
}

//Hearts-------------------------------------------------
var p1Hearts = 5;
function loseHeartP1() {
    "use strict";
    setTimeout(function () {
    var targetedHeart = p1Hearts;
    document.getElementById("heart" + targetedHeart).style.color = "black";
    p1Hearts = p1Hearts - 1;
    if (p1Hearts === 0) {
        popup("Comp");
        p1Hearts = 5;
        p2Hearts = 5;
        for (var i = 1; i <= 10; i++) {
            document.getElementById('heart' + i).style.color = "darkred";
        }
    }
    }, 3000)
}
var p2Hearts = 5;
function loseHeartP2() {
    "use strict";
    setTimeout(function () {
    var targetedHeart = p2Hearts + 5;
    document.getElementById("heart" + targetedHeart).style.color = "black";
    p2Hearts = p2Hearts - 1;
    if (p2Hearts === 0) {
        popup("Player");
        p1Hearts = 5;
        p2Hearts = 5;
        for (var i = 1; i <= 10; i++) {
            document.getElementById('heart' + i).style.color = "darkred";
        }
    }
    }, 1500)
}

//Player Vs Computer-------------------------------------------------------------------------
function cpuPick() {
    "use strict";
    var comPick = Math.random();
    if (comPick <= 0.333333333333333333333333333) {
        comPick = 'rock';
    } else if (comPick <= 0.6666666666666666666667) {
        comPick = 'paper';
    } else {
        comPick = 'scissors';
    }
    document.getElementById('compchoice').className = comPick;
    return comPick;
}
function mover(uP) {
    "use strict";
    document.getElementById(uP).style.animation = "P1 1.5s linear";
    document.getElementById('compchoice').style.animation = "P2 1.5s linear";
    setTimeout(function(){document.getElementById(uP).style.animation = "none";
      playing = false;
    document.getElementById('compchoice').style.animation = "none";}, 1500);
}
function play(uP) {
    "use strict";
    if (playing === false) {
        playing = true;
        var choice1 = uP, choice2 = cpuPick(), resultMessage;

        document.getElementById('uPick').innerHTML = choice1;
        document.getElementById('cpuPick').innerHTML = choice2;
            if (choice1 === choice2) {
            } else if (choice1 === 'rock') {
                if (choice2 === 'scissors') {
                    loseHeartP2();
                } else {
                    loseHeartP1();1
                }
            } else if (choice1 === 'paper') {
                if (choice2 === 'rock') {
                    loseHeartP2();
                } else {
                    loseHeartP1();
                }
            } else {
                if (choice2 === 'paper') {
                    loseHeartP2();
                } else {
                    loseHeartP1();
                }
            }
        mover(uP);
    }
}

document.addEventListener('keydown', function () {
    "use strict";
    if (popupIsUp === false) {
        if (event.keyCode === 49 || event.keyCode === 97) {play('rock'); }
        if (event.keyCode === 50 || event.keyCode === 98) {play('paper'); }
        if (event.keyCode === 51 || event.keyCode === 99) {play('scissors'); }
    } else {
        PopupRemove();
    }
});