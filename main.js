document.addEventListener('DOMContentLoaded', function () {
  newPalette();
});

// Query Selectors👇
// Boxes
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

// Hexcodes
var hex1 = document.querySelector('#hex-1');
var hex2 = document.querySelector('#hex-2');
var hex3 = document.querySelector('#hex-3');
var hex4 = document.querySelector('#hex-4');
var hex5 = document.querySelector('#hex-5');

var aside = document.querySelector('.saved-palettes-wrapper');
var savedPalettesView = document.querySelector('.saved-palettes');
var openingMessage = document.querySelector('.opening-message');

// Lock/Unlock Icons
var toggleIcon = document.querySelectorAll('.toggle-icon');

// Button
var newPaletteBtn = document.querySelector('.new-palette-btn');
var savePaletteBtn = document.querySelector('.save-palette-btn');

// Event Listeners👇
newPaletteBtn.addEventListener('click', function () {
  if (savedPalettesView.innerHTML === '') {
    openingMessage.classList.remove('hidden');
  }
  newPalette();
});

savePaletteBtn.addEventListener('click', function () {
  savePalette(currentPalette);
  displaySavedPalettes();
  newPalette();
});

savedPalettesView.addEventListener('click', function(event) {
  if (event.target.classList.contains("delete-btn")) {
    displayDeletePalette(event);
  } else if (event.target.classList.contains("mini-box")) {
    restorePalette(event);
  }
  if(savedPalettesView.innerHTML === '') {
    savedPalettesView.innerHTML = `<p class="opening-message">No Saved Palettes Yet!</p>`
  }
})

for (var i = 0; i < toggleIcon.length; i++) {
  toggleIcon[i].addEventListener('click', displaySwitchIcon);
}

// Global Variables👇
var currentPalette;

var savedPalettes = [];

// Event Handlers and Functions👇
function randomHex() {
  var hexcode = '';
  var hexParts = 'ABCDEF0123456789';

  for (var i = 0; i < 6; i++)
    hexcode += hexParts.charAt(Math.floor(Math.random() * 16));
  return `#${hexcode}`;
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
  return createColor();
}

function newPalette() {
  if (currentPalette) {
    var color1 = changeColor(currentPalette.color1);
    var color2 = changeColor(currentPalette.color2);
    var color3 = changeColor(currentPalette.color3);
    var color4 = changeColor(currentPalette.color4);
    var color5 = changeColor(currentPalette.color5);
  } else {
    var color1 = createColor();
    var color2 = createColor();
    var color3 = createColor();
    var color4 = createColor();
    var color5 = createColor();
  }
  createPalette(color1, color2, color3, color4, color5);
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

function loadPalette() {
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
    displayedIcon.src = './assets/locked.png';
    displayedIcon.alt = 'locked icon';
    displayedIcon.classList.remove('unlocked-icon');
    displayedIcon.classList.add('locked-icon');
  } else {
    //!isLocked
    displayedIcon.src = './assets/unlocked.png';
    displayedIcon.alt = 'unlocked icon';
    displayedIcon.classList.remove('locked-icon');
    displayedIcon.classList.add('unlocked-icon');
  }
}

function displaySwitchIcon(event) {
  var displayedIcon = event.target;
  var clickedBoxColor = displayedIcon.getAttribute('data-color');
  var isLocked = currentPalette[clickedBoxColor].isLocked;
  currentPalette[clickedBoxColor].isLocked = !isLocked;
  displayIcon(displayedIcon, !isLocked);
}

function savePalette(currentPalette) {
  savedPalettes.push(currentPalette);
}

function displaySavedPalettes() {
  var newHTML = ``;

  for (var i = 0; i < savedPalettes.length; i++) {
    var palette = savedPalettes[i];
    var miniBoxesHTML = `<div class="mini-box-container" id="${savedPalettes[i].id}">`;

    miniBoxesHTML += `<div class="mini-box" id="mini-1" style="background-color: ${palette.color1.hexCode};"></div>`;
    miniBoxesHTML += `<div class="mini-box" id="mini-2" style="background-color: ${palette.color2.hexCode};"></div>`;
    miniBoxesHTML += `<div class="mini-box" id="mini-3" style="background-color: ${palette.color3.hexCode};"></div>`;
    miniBoxesHTML += `<div class="mini-box" id="mini-4" style="background-color: ${palette.color4.hexCode};"></div>`;
    miniBoxesHTML += `<div class="mini-box" id="mini-5" style="background-color: ${palette.color5.hexCode};"></div>`;
    miniBoxesHTML += `<img src='assets/delete.png' alt="x shaped delete icon" class="delete-btn">`;

    newHTML += miniBoxesHTML;
    newHTML += `</div>`;
  }
  savedPalettesView.innerHTML = newHTML;
}

function deleteSavedPalette(paletteId) {
  for (var i = 0; i < savedPalettes.length; i++) {
    if (savedPalettes[i].id === paletteId) {
      savedPalettes.splice(i, 1);
    }
  }
}

function displayDeletePalette(event) {
  var deleteBtn = event.target.closest('.delete-btn');
  if (deleteBtn) {
    var miniBoxContainer = deleteBtn.closest('.mini-box-container');
    var paletteId = parseInt(miniBoxContainer.getAttribute('id'));
    miniBoxContainer.remove();
    deleteSavedPalette(paletteId);
  }
}

function restorePalette(event) {
  var miniPalette = event.target.closest(".mini-box-container");
  var storedId = miniPalette.id;
  for (var i = 0; i < savedPalettes.length; i++) {
    if (storedId == savedPalettes[i].id) {
      currentPalette = savedPalettes[i];
      var color1 = savedPalettes[i].color1.hexCode;
      var color2 = savedPalettes[i].color2.hexCode;
      var color3 = savedPalettes[i].color3.hexCode;
      var color4 = savedPalettes[i].color4.hexCode;
      var color5 = savedPalettes[i].color5.hexCode;
    }
  }
  loadPalette(color1, color2, color3, color4, color5);
}