"use strict"

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var displayColor = document.getElementById('colorDisplay');

displayColor.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  // event listeners for squares
  squares[i].addEventListener('click', function(){
    var clickedSquare = this.style.backgroundColor;
    if (clickedSquare === pickedColor) {
      alert('Correct!!!');
    } else {
      alert('wrong!')
    }
  });
}