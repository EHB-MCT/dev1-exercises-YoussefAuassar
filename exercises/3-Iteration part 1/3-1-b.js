"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";



drawCircles();

function drawCircles(){

let canvas = document.querySelector ("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

    let i = 1;

    while (i <=4 ) {
          fillCircle(i * 100,  100, 50);
          i++;
    }


}

function fillCircle(x, y, r){
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fill();
}