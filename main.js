"use strict"

var colors = generateDifferentColors(6);
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var displayColor = document.getElementById('colorDisplay');
var displayMessage = document.getElementById('message');

displayColor.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  
  // event listeners for squares
  squares[i].addEventListener('click', function(){
    var clickedSquare = this.style.backgroundColor;
    if (clickedSquare === pickedColor) {
      displayMessage.textContent = 'Correct!';
      changeColor(clickedSquare);
      h1.style.backgroundColor = clickedSquare;
    } else {
      this.style.backgroundColor = '#232323';
      displayMessage.textContent = 'Try again';
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor () {
 var random =  Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateDifferentColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor () {
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 return "rgb(" + r + ', ' + g + ', ' + b +")";
};

