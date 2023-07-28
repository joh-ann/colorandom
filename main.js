document.addEventListener("DOMContentLoaded", function() {
console.log("content loaded")
  randomPalette()
});

// query selectors
// boxes
var box1 = document.querySelector('#box-1');
var box2 = document.querySelector('#box-2');
var box3 = document.querySelector('#box-3');
var box4 = document.querySelector('#box-4');
var box5 = document.querySelector('#box-5');
var mini1 = document.querySelector('#mini-1');
var mini2 = document.querySelector('#mini-2');
var mini3 = document.querySelector('#mini-3');
var mini4 = document.querySelector('#mini-4');
var mini5 = document.querySelector('#mini-5');

// hexcodes
var hex1 = document.querySelector('#hex-1');
var hex2 = document.querySelector('#hex-2');
var hex3 = document.querySelector('#hex-3');
var hex4 = document.querySelector('#hex-4');
var hex5 = document.querySelector('#hex-5');

var aside = document.querySelector('.saved-palettes-wrapper');
var savedPalettesView = document.querySelector('.saved-palettes');
var openingMessage = document.querySelector('.opening-message');

// lock/unlock icons
var toggleIcon = document.querySelectorAll('.toggle-icon');
var lockedIcon = document.querySelectorAll('.locked-icon');
var unlockedIcon = document.querySelectorAll('.unlocked-icon');

//button
var newPaletteBtn = document.querySelector(".new-palette-btn");
var savePaletteBtn = document.querySelector(".save-palette-btn");

// event listeners
newPaletteBtn.addEventListener("click", randomPalette);
// boxes.addEventListener("click", toggleLock);

savePaletteBtn.addEventListener('click', function () {
  savePalette(currentPalette);
  displaySavedPalettes();
});
//global variables
var currentPalette;

var savedPalettes = [];

for (var i = 0; i < toggleIcon.length; i++) {
  toggleIcon[i].addEventListener('click', displaySwitchIcon);
}

function randomHex() {
  var hexcode = '';

  var hexParts = 'ABCDEF0123456789';

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
    color5: color5,
  };
  currentPalette = palette;
  loadPalette();
}

function createColor() {
  var color = {
    hexCode: randomHex(),
    isLocked: false,
    id: Date.now(),
  };
  return color;
}

function changeColor(color) {
if (color && color.isLocked) {
    return color;
  } 
return createColor()
}

function randomPalette() {
  console.log(currentPalette);
  if (currentPalette) {
    var color1 = changeColor(currentPalette.color1)
    var color2 = changeColor(currentPalette.color2)
    var color3 = changeColor(currentPalette.color3)
    var color4 = changeColor(currentPalette.color4)
    var color5 = changeColor(currentPalette.color5)
  } else {
    var color1 = createColor()
    var color2 = createColor()
    var color3 = createColor()
    var color4 = createColor()
    var color5 = createColor()
  }
    createPalette(color1, color2, color3, color4, color5)
}

function loadPalette() {
  console.log(currentPalette);
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

function displayIcon(displayedIcon, isLocked) {
  if (isLocked) {
    displayedIcon.src = "./assets/locked.png";
    displayedIcon.alt = "locked icon";
  } else {
    displayedIcon.src = "./assets/unlocked.png";
    displayedIcon.alt = "unlocked icon";
  }
}

function switchIconClass(displayedIcon, isLocked) {
  if (isLocked) {
    displayedIcon.classList.remove("unlocked-icon");
    displayedIcon.classList.add("locked-icon");
  } else {
    displayedIcon.classList.remove("locked-icon");
    displayedIcon.classList.add("unlocked-icon");
  }
}

function displaySwitchIcon(event) {
  var displayedIcon = event.target;
  console.log("currentPalette", currentPalette);
  var unlocked = displayedIcon.classList.contains("unlocked-icon");
  displayIcon(displayedIcon, unlocked);
  switchIconClass(displayedIcon, unlocked);
}

function updateLockStatus(event) {
  console.log('CURRENT: Update Lock', currentPalette)
  var clickedColorId = parseInt(event.target.getAttribute('id'));
  if (currentPalette.color1.id === clickedColorId) {
    currentPalette.color1.isLocked = true;
  } else if (currentPalette.color2.id === clickedColorId) {
    currentPalette.color2.isLocked = true;
  } else if (currentPalette.color3.id === clickedColorId) {
    currentPalette.color3.isLocked = true;
  } else if (currentPalette.color4.id === clickedColorId) {
    currentPalette.color4.isLocked = true;
  } else if (currentPalette.color5.id === clickedColorId) {
    currentPalette.color5.isLocked = true;
  }
}

function savePalette(currentPalette) {
  savedPalettes.push(currentPalette);
}

function displaySavedPalettes() {
  openingMessage.classList.add('hidden');
  var newHTML = `<div class="mini-box-container">`;

  for (var i = 0; i < savedPalettes.length; i++) {
    var palette = savedPalettes[i]; // get current savedpalette
    var miniBoxesHTML = ``; // store mini boxes HTML for current palette

    miniBoxesHTML += `<div class="mini-box" id="mini-1" style="background-color: ${palette.color1.hexCode};"></div>`;
    miniBoxesHTML += `<div class="mini-box" id="mini-2"style="background-color: ${palette.color2.hexCode};"></div>`;
    miniBoxesHTML += `<div class="mini-box" id="mini-3"style="background-color: ${palette.color3.hexCode};"></div>`;
    miniBoxesHTML += `<div class="mini-box" id="mini-4"style="background-color: ${palette.color4.hexCode};"></div>`;
    miniBoxesHTML += `<div class="mini-box" id="mini-5"style="background-color: ${palette.color5.hexCode};"></div>`;
    // append to newHTML
    newHTML += miniBoxesHTML;
    newHTML += `</div>`;
  }
  savedPalettesView.innerHTML = newHTML;
}
