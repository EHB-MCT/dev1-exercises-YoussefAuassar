
"use strict";

alert('Oefening 1');

let canvas = document.querySelector ("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName () {
 
    context.lineWidth = 7;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 100);
    context.lineTo(200, 300);
    
    context.lineTo(400, 100);

    context.lineTo(100, 400);

    context.stroke();

    





 
     
}

