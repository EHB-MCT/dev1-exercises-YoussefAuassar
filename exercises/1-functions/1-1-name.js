"use strict";

let canvas = document.querySelector ("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");




drawName();

function drawName () {

    // Letter Y

    context.beginPath();

    context.moveTo(100,200);
    context.lineTo(200,400);

    context.moveTo(200,400);
    context.lineTo(300,200);

    context.moveTo(200,400);
    context.lineTo(200,600);

    context.stroke();

    // Letter O

    context.beginPath();

    context.arc(400,450,100,0,Math.PI*2);

    context.stroke();

    // Letter U

    



    

    


}

