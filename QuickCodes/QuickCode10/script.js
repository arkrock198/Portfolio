var breakfastChoices = ["a poptart", "cereal", "eggs and bacon", "french toast", "a bagel", "a breakfast burrito", "a cinnamon roll"];
var lunchChoices = ["soup", "a Salad", "a sandwich", "a burrito", "pizza", "mac & cheese", "a quesadilla"];
var dinnerChoices = ["meatloaf", "spaghetti", "tacos", "chili", "burgers", "steak", "enchiladas"];
var snackChoices = ["chips", "grapes", "apples", "celery", "nuts", "yogurt", "cheese its"];
var foodnum = 1;

function plan() {
    "use strict";
    var copy = breakfastChoices.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    document.getElementById("sunbreak").innerHTML = copy.splice(0, 1);
    document.getElementById("monbreak").innerHTML = copy.splice(0, 1);
    document.getElementById("tuebreak").innerHTML = copy.splice(0, 1);
    document.getElementById("wedbreak").innerHTML = copy.splice(0, 1);
    document.getElementById("thubreak").innerHTML = copy.splice(0, 1);
    document.getElementById("fribreak").innerHTML = copy.splice(0, 1);
    document.getElementById("satbreak").innerHTML = copy.splice(0, 1);
    
    
    
    copy = lunchChoices.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    document.getElementById("sunlunch").innerHTML = copy.splice(0, 1);
    document.getElementById("monlunch").innerHTML = copy.splice(0, 1);
    document.getElementById("tuelunch").innerHTML = copy.splice(0, 1);
    document.getElementById("wedlunch").innerHTML = copy.splice(0, 1);
    document.getElementById("thulunch").innerHTML = copy.splice(0, 1);
    document.getElementById("frilunch").innerHTML = copy.splice(0, 1);
    document.getElementById("satlunch").innerHTML = copy.splice(0, 1);
    
    
    
    copy = dinnerChoices.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    document.getElementById("sundinner").innerHTML = copy.splice(0, 1);
    document.getElementById("mondinner").innerHTML = copy.splice(0, 1);
    document.getElementById("tuedinner").innerHTML = copy.splice(0, 1);
    document.getElementById("weddinner").innerHTML = copy.splice(0, 1);
    document.getElementById("thudinner").innerHTML = copy.splice(0, 1);
    document.getElementById("fridinner").innerHTML = copy.splice(0, 1);
    document.getElementById("satdinner").innerHTML = copy.splice(0, 1);
}

function breakfast() {
    var copy = breakfastChoices.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    document.getElementById("text").style.visibility = "visible";
    document.getElementById("text").innerHTML = "You should have " + copy.splice(0, 1) + " for breakfast"
}

function lunch() {
    var copy = lunchChoices.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    document.getElementById("text").style.visibility = "visible";
    document.getElementById("text").innerHTML = "You should have " + copy.splice(0, 1) + " for lunch"
}

function dinner() {
    var copy = dinnerChoices.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    document.getElementById("text").style.visibility = "visible";
    document.getElementById("text").innerHTML = "You should have " + copy.splice(0, 1) + " for dinner"
}
function snack() {
    var copy = snackChoices.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    document.getElementById("text").style.visibility = "visible";
    document.getElementById("text").innerHTML = "You should have " + copy.splice(0, 1) + " for a snack"
}

document.addEventListener('keydown', function () {
    "use strict";
    
    if (event.keyCode === 49 || event.keyCode === 97) {
        breakfast();
    } else if (event.keyCode === 50 || event.keyCode === 98) {
        lunch();
    } else if (event.keyCode === 51 || event.keyCode === 99) {
        dinner();
    } else if (event.keyCode === 52 || event.keyCode === 100) {
        snack();
    }
});
function changefood() {
    if (foodnum === 1) {
        foodnum++;
        document.getElementById('addfood').innerHTML = "lunch";
    } else if (foodnum === 2) {
        foodnum++;
        document.getElementById('addfood').innerHTML = "dinner";
    } else if (foodnum === 3) {
        foodnum++;
        document.getElementById('addfood').innerHTML = "snack";
    } else if (foodnum === 4) {
        foodnum = 1;
        document.getElementById('addfood').innerHTML = "breakfast";
    }
}
function displayNone(divId) {
    document.getElementById(divId).value = "";
}
function submit() {
    var newFood = document.getElementById('TextBox').value;
    if (foodnum === 1) {
        breakfastChoices = breakfastChoices.concat(newFood);
    } else if (foodnum === 2) {
        lunchChoices = lunchChoices.concat(newFood);
    } else if (foodnum === 3) {
        dinnerChoices = dinnerChoices.concat(newFood);
    } else if (foodnum === 4) {
        snackChoices = snackChoices.concat(newFood);
    }
    document.getElementById('TextBox').value = "Enter food here!";
    setTimeout(function () {
        document.getElementById('TextBox').value = newFood;
        setTimeout(function () {
            document.getElementById('TextBox').value = "Enter food here!";
            setTimeout(function () {
                document.getElementById('TextBox').value = newFood;
                setTimeout(function () {
                    document.getElementById('TextBox').value = "Enter food here!";
                }, 100);
            }, 200);
        }, 300);
    }, 400);
}