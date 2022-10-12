"use strict";

let canvas = document.querySelector ("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName () {

    // Letter Y

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(180, 300);
    context.lineTo(300, 150);
    context.lineTo(20,500);
    context.stroke();

    // Letter O

    context.beginPath();
    context.arc(350, 325, 70, 0, 2 * Math.PI);
    context.stroke();

    // Letter U

    
   
}

