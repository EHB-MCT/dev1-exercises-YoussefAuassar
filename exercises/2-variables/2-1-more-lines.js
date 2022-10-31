"use strict";

let canvas = document.querySelector ("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLines();

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 50;
let spacing = 200;


function drawLines () {

    context.lineWidth = 20;

    context.beginPath();
    context.moveTo(margin, spacing);
    context.lineTo(width - margin , spacing);
    

   
}