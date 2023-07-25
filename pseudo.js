// iteration 0 - basic layout
// domcontentload to load index
// title, 5 static boxes, hard coded

// iteration 1 - generate random palettes
// new palette button, add new palette to html & js
// randomize colors on page load
// how to randomize hex codes
// hex codes under each box
// store data of current palette
    // store 5 hex codes to an array
    // push array to data model

// iteration 2 - lock/unlock colors
// all colors should display unlocked icon
    // add lock to html & js
// add functionality to lock, replace lock image with unlock
// conditional when new palette is clicked, locked colors stay the same
// when the palette is updated, update data model too

// iteration 3 - save palettes
// add save palette button to html & js
// add save palettes section to html & js - using <aside>
// when page loads there should be no saved palettes - clearpalettes()?
    // add text block, display message saying "No saved palettes yet!"
// when user clicks save palette:
    // palette should save to data model
    // palette should show up in saved palette section
    // new palette should be generated automatically - so on load show saved & generate new

// iteration 4 - delete palettes
// add delete button to html/js, in saved palettes section, beside saved colors
    // if palette is removed, remove from data model
    // assign delete button to id?
    // palette removed from the page