// select your elements first - what is the user going to interact with?
// there are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector("#navButton");

// this is a 1 to many connection to elements in the DOM
// the variable name is the "basket"
let theButtons = document.querySelectorAll("#buttonHolder img"), 
	theHeading = document.querySelector("#headLine h1"),
    // collect ALL of the draggable pieces in the drag zone
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll(".drop-zone"),
    piecesBoard = document.querySelector(".puzzle-pieces"),	
    // set up a global variable to store a reference to the dragged piece
	// i need to know this later when i drop it on a zone
    draggedPiece; 

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage() {


    //Second bug solved, pecies reparent back to the drag zone when clicking on a new puzzle.
    dropZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
     });

        puzzlePieces.forEach(piece => {
        piece.classList.remove('dropped');
        piecesBoard.appendChild(piece);
        });


        // change the background image in the drop zone
	// the `${}` is called a JavaScript Template String - whatever is inside the curly
	// braces is evaluated at runtime and interpolated (replaces the bracket notation)

	// you can use variables, functions, etc inline in your code this way
	puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
}

function handleStartDrag() {
	console.log('started dragging this piece:', this);
    // store the element I am currently dragging in that global draggedPiece variable

	draggedPiece = this;
	
}

function handleDragOver(e) { 
    // block the default behaviour 
	e.preventDefault();
// and then do whatever you want.

    console.log('dragged over me');
}

function handleDrop(e) {
	e.preventDefault();
	console.log('dropped something on me');



//     First bug solved, e one piece in one drop zone at a time and not pasting on top of each other.
if (this.children.length > 0) {
    return;
}
this.appendChild(draggedPiece);}



    // 	e.target.appendChild(draggedPiece);
// }


// event handling at the bottom -> how things react when you use the targets
// how is the user going to interact with the elements / controls you provide?

// 1 to 1 event handling (1 variable, one element):
// navButton.addEventListener('click', changeBGImage);

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each


theButtons.forEach(button => button.addEventListener("click", changeBGImage));
// add the drag start handler to all of the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
// add the dragover handling to the drop zones
dropZones.forEach(zone =>zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// temp handling
tempLink.addEventListener('click', blockDefaultBehaviour);