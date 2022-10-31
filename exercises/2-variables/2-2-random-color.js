"use strict";

let canvas = document.querySelector ("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;
let random = Math.random() * 500;
let size = 200;
let randomX = Math.floor(Math.random()* (width- size));
let randomY = Math.floor(Math.random()* (height- size));
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

console.log(r, g, b);
let color = "rgb(" + r + "," + g + "," + b + ")";
console.log(color);

drawSquare();

function drawSquare(){

context.fillStyle = color;
context.fillRect(randomX, randomY, 200, 200);



}










    


