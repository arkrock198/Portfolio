var loserNum;
var t = 1;
var loserNum;
var whichPlayer = 1;
var messNum;

var p1 = 0;
var p2 = 0;

document.getElementById('p1Score').innerHTML = p1;
document.getElementById('p2Score').innerHTML = p2;

function setLoser() {
    loserNum = Math.floor(Math.random() * 9 + 1);
}

function showLoser() {
    alert(loserNum);
}
function checkPick(circNum) { 
    if (circNum == loserNum){
        increaseScore();
        popupController('visible');
        circlesController('hidden');
    }
    else {
        document.getElementById('circ' + circNum).style.visibility = "hidden";
        }
    indicatePlayer();
    
}
function circlesController(status) {
    
    for (var i = 1; i <= 9; i++) {
       document.getElementById('circ' + i).style.visibility = status;
    }
    document.getElementById('footer').style.visibility = status;
}

function popupController(status) {
    document.getElementById('popup').style.visibility = status;
    document.getElementById('loserMess').innerHTML = messNum;
    document.getElementById('popScore1').innerHTML = p1;
    document.getElementById('popScore2').innerHTML = p2;
}
function reStart() {
    setLoser();
    popupController('hidden');
    circlesController('visible');
}
function reSet() {
    p1 = 0;
    p2 = 0;
    document.getElementById('p1Score').innerHTML = p1;
    document.getElementById('p2Score').innerHTML = p2;
    whichPlayer = 1;
    reStart();
    document.getElementById('go1').style.backgroundColor = "lime";
    document.getElementById('go2').style.backgroundColor = "transparent";
    
    
}

function indicatePlayer(){
    whichPlayer++;
    if (whichPlayer % 2 == 0) {
       document.getElementById('go1').style.backgroundColor = "transparent";
       document.getElementById('go2').style.backgroundColor = "lime";
    } else{
          document.getElementById('go1').style.backgroundColor = "lime"; document.getElementById('go2').style.backgroundColor = "transparent";
    }
}
function increaseScore(){
    if (whichPlayer % 2 == 0) {
        p1++;
        document.getElementById('p1Score').innerHTML = p1;
        messNum = 2;
    }
    else{
        p2++;
        document.getElementById('p2Score').innerHTML = p2;
        messNum = 1;
    }
}
window.onload = setLoser();
