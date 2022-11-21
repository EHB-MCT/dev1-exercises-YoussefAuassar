"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "lightblue";
    context.fillRect(50, 50, 300, 300);
    drawLine();
}

function drawLine() {
    let i = 0;
    while (i <= 9) {

        Utils.drawLine(80, 40*i, 320, 40*i);
        i += 0.8;
    }

}





