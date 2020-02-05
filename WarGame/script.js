var deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14];

var uCards = [];
var cCards = [];
var interval = 500;

function deal() {
    "use strict";
    var sDeck = deck.slice(0);
    
    for (var i = sDeck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = sDeck[i];
        sDeck[i] = sDeck[j];
        sDeck[j] = temp;
    }
    
    var half = sDeck.length / 2;
    uCards = sDeck.splice(0, half);
    cCards = sDeck;
    
    document.getElementById('uDeck').innerHTML = uCards;
    document.getElementById('cDeck').innerHTML = cCards;

    document.getElementById('uNum').innerHTML = uCards.length;
    document.getElementById('cNum').innerHTML = cCards.length;
    
    document.getElementById('UCard1').innerHTML = "";
    document.getElementById('CCard1').innerHTML = "";
    document.getElementById('UCard2').innerHTML = "";
    document.getElementById('CCard2').innerHTML = "";
    document.getElementById('UCard3').innerHTML = "";
    document.getElementById('CCard3').innerHTML = "";
}

var canPlay = true;
var popupIsUp = false;

function popup(winner) {
    "use strict";
    document.getElementById('popup').style.visibility = "visible";
    document.getElementById('winner').innerHTML = winner;
    popupIsUp = true;
}
function playAgain() {
    "use strict";
    document.getElementById('popup').style.visibility = "hidden";
    
    document.getElementById('uDeck').innerHTML = uCards;
    document.getElementById('cDeck').innerHTML = cCards;
    
    document.getElementById('uNum').innerHTML = uCards.length;
    document.getElementById('cNum').innerHTML = cCards.length;
    popupIsUp = false;
    deal();
    interval = 1000;
}

function displayCards(card, divId) {
    var show;
    if (card <= 10) {show = card;}
    else if (card === 11) {show = 'J';}
    else if (card === 12) {show = 'Q';}
    else if (card === 13) {show = 'K';}
    else if (card === 14) {show = 'A';}
    else {show = 'x';}
    
    document.getElementById(divId).innerHTML = show;
}

function play() {
    "use strict";
    if (canPlay === true) {
        canPlay = false;
        
        document.getElementById('uDeck').innerHTML = uCards;
        document.getElementById('cDeck').innerHTML = cCards;

        document.getElementById('uNum').innerHTML = uCards.length;
        document.getElementById('cNum').innerHTML = cCards.length;

        var usersCard = parseInt(uCards.splice(0, 1)), compsCard = parseInt(cCards.splice(0, 1)), warArray = [];
        
        while (usersCard === compsCard) {
            warArray = warArray.concat(usersCard);
            warArray = warArray.concat(uCards.splice(0, 3));
            warArray = warArray.concat(cCards.splice(0, 3));
            warArray = warArray.concat(compsCard);
            
            usersCard = parseInt(uCards.splice(0, 1));
            compsCard = parseInt(cCards.splice(0, 1));
            
            if (uCards.length === 0) {
                popup('Player 1');
            }
            if (cCards.length === 0) {
                popup('Player 2');
            }
        }
        
        displayCards(usersCard, 'UCard1');
        displayCards(usersCard, 'UCard2');
        displayCards(usersCard, 'UCard3');
        displayCards(compsCard, 'CCard1');
        displayCards(compsCard, 'CCard2');
        displayCards(compsCard, 'CCard3');

        if (usersCard > compsCard) {
            uCards = uCards.concat(usersCard);
            uCards = uCards.concat(compsCard);
            uCards = uCards.concat(warArray);
        } else if (usersCard < compsCard) {
            cCards = cCards.concat(warArray);
            cCards = cCards.concat(usersCard);
            cCards = cCards.concat(compsCard);
        }
        if (uCards.length === 0) {
            popup('Player 1');
        }
        if (cCards.length === 0) {
            popup('Player 2');
        }
    }
    canPlay = true;
}
function quickPlay() {
    setTimeout(function () {
        if (uCards.length) {
            if (cCards.length) {
                play();
                quickPlay();
                interval = interval - 100;
                return;
            }
        }
    }, interval);
}

document.addEventListener('keydown', function () {
    "use strict";
    if (popupIsUp === true) {
        playAgain();
    } else {
        play();
    }
});