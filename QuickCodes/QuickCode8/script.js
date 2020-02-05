var x = 1;
function makeRound(divId) {
    document.getElementById(divId).style.borderRadius = "50%";
}
function makeSquare(divId) {
    document.getElementById(divId).style.borderRadius = "0%";
}
function makeBlue(divId) {
    document.getElementById(divId).style.backgroundColor = "blue";
    makeRound(divId);
}

function makeRed(divId) {
    document.getElementById(divId).style.backgroundColor = "red";
    makeSquare(divId);
}
function right(divId, divId2) {
    document.getElementById(divId).style.left = "800px";
    document.getElementById(divId2).style.left = "0";
}
function left(divId, divId2) {
    document.getElementById(divId2).style.left = "800px";
    document.getElementById(divId).style.left = "0";
}
function turnAround(divId) {
    document.getElementById(divId).style.transform = "rotateY(180deg)";
}
function turnBackAround(divId) {
    document.getElementById(divId).style.transform = "rotateY(0deg)";
}
function grow(divId) {
    document.getElementById(divId).style.fontSize = "4em";
}
function ungrow(divId) {
    document.getElementById(divId).style.fontSize = "2em";
}
function round(div1, div2, div3, div4) {
    if (x < 5) {
        document.getElementById(div1).style.borderRadius = "50%";
        document.getElementById(div1).style.backgroundColor = "blue";
        document.getElementById(div2).style.borderRadius = "50%";
        document.getElementById(div2).style.backgroundColor = "red";
        document.getElementById(div3).style.borderRadius = "50%";
        document.getElementById(div3).style.backgroundColor = "red";
        document.getElementById(div4).style.borderRadius = "50%";
        document.getElementById(div4).style.backgroundColor = "blue";
        x = 7;
    } else {
        document.getElementById(div1).style.borderRadius = "100% 0 0 0";
        document.getElementById(div1).style.backgroundColor = "purple";
        document.getElementById(div2).style.borderRadius = "0 100% 0 0";
        document.getElementById(div2).style.backgroundColor = "purple";
        document.getElementById(div3).style.borderRadius = "0 0 0 100%";
        document.getElementById(div3).style.backgroundColor = "purple";
        document.getElementById(div4).style.borderRadius = "0 0 100% 0";
        document.getElementById(div4).style.backgroundColor = "purple";
        x = 1;
    }
}
function purple(div1, div2, div3, div4) {
    document.getElementById(div1).style.backgroundColor = "blue";
    document.getElementById(div2).style.backgroundColor = "red";
    document.getElementById(div3).style.backgroundColor = "red";
    document.getElementById(div4).style.backgroundColor = "blue";
    
    document.getElementById(div1).style.width = "30px";
    document.getElementById(div2).style.width = "30px";
    document.getElementById(div3).style.width = "30px";
    document.getElementById(div4).style.width = "30px";
    document.getElementById(div1).style.height = "30px";
    document.getElementById(div2).style.height = "30px";
    document.getElementById(div3).style.height = "30px";
    document.getElementById(div4).style.height = "30px";
    
    document.getElementById(div1).style.left = "0";
    document.getElementById(div2).style.left = "970px";
    document.getElementById(div3).style.left = "0";
    document.getElementById(div4).style.left = "970px";
    document.getElementById(div1).style.top = "0";
    document.getElementById(div2).style.top = "0";
    document.getElementById(div3).style.top = "370px";
    document.getElementById(div4).style.top = "370px";
}
function pur(div1, div2, div3, div4) {
    document.getElementById(div1).style.backgroundColor = "purple";
    document.getElementById(div2).style.backgroundColor = "purple";
    document.getElementById(div3).style.backgroundColor = "purple";
    document.getElementById(div4).style.backgroundColor = "purple";
    
    document.getElementById(div1).style.width = "400px";
    document.getElementById(div2).style.width = "400px";
    document.getElementById(div3).style.width = "400px";
    document.getElementById(div4).style.width = "400px";
    document.getElementById(div1).style.height = "400px";
    document.getElementById(div2).style.height = "400px";
    document.getElementById(div3).style.height = "400px";
    document.getElementById(div4).style.height = "400px";
    
    document.getElementById(div1).style.left = "300px";
    document.getElementById(div2).style.left = "300px";
    document.getElementById(div3).style.left = "300px";
    document.getElementById(div4).style.left = "300px";
    document.getElementById(div1).style.top = "0";
    document.getElementById(div2).style.top = "0";
    document.getElementById(div3).style.top = "0";
    document.getElementById(div4).style.top = "0";
}