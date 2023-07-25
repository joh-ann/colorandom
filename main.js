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

//button
var newPaletteBtn = document.querySelector(".new-palette-btn");

// event listeners
newPaletteBtn.addEventListener("click", loadPalette);

//global variables
var currentPalette = "";

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
    return palette;
}

function randomPalette() {
    var color1 = randomHex();
    var color2 = randomHex();
    var color3 = randomHex();
    var color4 = randomHex();
    var color5 = randomHex();
var currentPalette = createPalette(color1, color2, color3, color4, color5)
console.log(currentPalette);
    return currentPalette;
}

function loadPalette() {
    var currentPalette = randomPalette()
    box1.style.backgroundColor = currentPalette.color1;
    box2.style.backgroundColor = currentPalette.color2;
    box3.style.backgroundColor = currentPalette.color3;
    box4.style.backgroundColor = currentPalette.color4;
    box5.style.backgroundColor = currentPalette.color5;

    hex1.innerText = currentPalette.color1;
    hex2.innerText = currentPalette.color2;
    hex3.innerText = currentPalette.color3;
    hex4.innerText = currentPalette.color4;
    hex5.innerText = currentPalette.color5;
}