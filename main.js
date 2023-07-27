document.addEventListener("DOMContentLoaded", function() {

});

// query selectors
// boxes
var box1 = document.querySelector("#box-1");
var box2 = document.querySelector("#box-2");
var box3 = document.querySelector("#box-3");
var box4 = document.querySelector("#box-4");
var box5 = document.querySelector("#box-5");

// hexcodes
var hex1 = document.querySelector("#hex-1");
var hex2 = document.querySelector("#hex-2");
var hex3 = document.querySelector("#hex-3");
var hex4 = document.querySelector("#hex-4");
var hex5 = document.querySelector("#hex-5");

// lock/unlock icons
var boxes = document.querySelectorAll(".box")

// var box1Unlocked = document.querySelector("#unlocked-1");
// var box2Unlocked = document.querySelector("#unlocked-2");
// var box3Unlocked = document.querySelector("#unlocked-3");
// var box4Unlocked = document.querySelector("#unlocked-4");
// var box5Unlocked = document.querySelector("#unlocked-5");

// var box1Locked = document.querySelector("#locked-1");
// var box2Locked = document.querySelector("#locked-2");
// var box3Locked = document.querySelector("#locked-3");
// var box4Locked = document.querySelector("#locked-4");
// var box5Locked = document.querySelector("#locked-5");

//button
var newPaletteBtn = document.querySelector(".new-palette-btn");

// event listeners
newPaletteBtn.addEventListener("click", randomPalette);
boxes.addEventListener("click", toggleLock);

//global variables
var currentPalette;

var savedPalettes = []

// randomize hexcode
function randomHex() {
    var hexcode = "";
    
    var hexParts = "ABCDEF0123456789";
    
    for (var i = 0; i < 6; i++)
      hexcode += hexParts.charAt(Math.floor(Math.random() * 16));
    return `#${hexcode}`;
    }

function createPalette(color1, color2, color3, color4, color5) {
       var palette = {
        id: Date.now(),
        color1: color1,
        color2: color2,
        color3: color3,
        color4: color4,
        color5: color5
    }
    currentPalette = palette
    loadPalette()
}

function createColor() {
  var color = {
    hexCode: randomHex(), 
    isLocked: false,
    id: Date.now()
    };
    return color
}

function randomPalette() {
    var color1 = createColor()
    var color2 = createColor()
    var color3 = createColor()
    var color4 = createColor()
    var color5 = createColor()
  createPalette(color1, color2, color3, color4, color5)
}

function loadPalette() {
    console.log(currentPalette)
    box1.style.backgroundColor = currentPalette.color1.hexCode;
    box2.style.backgroundColor = currentPalette.color2.hexCode;
    box3.style.backgroundColor = currentPalette.color3.hexCode;
    box4.style.backgroundColor = currentPalette.color4.hexCode;
    box5.style.backgroundColor = currentPalette.color5.hexCode;

    hex1.innerText = currentPalette.color1.hexCode;
    hex2.innerText = currentPalette.color2.hexCode;
    hex3.innerText = currentPalette.color3.hexCode;
    hex4.innerText = currentPalette.color4.hexCode;
    hex5.innerText = currentPalette.color5.hexCode;
}

function toggleLock() {
    for (var i = 0; i < boxes.length; i++) {

    }
}