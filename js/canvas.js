        /**** Essaie de canvas ****/
            /* sur page HTML */

/*   <canvas id="canvas" width="200" height="45">
            Votre navigateur ne supporte pas canvas </canvas>   */

/*    <script src="canvas.js"></script> */


            /*JS*/

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    context.beginPath();
    context.font = "22px Arial";
    context.fillStyle = "#4C1B1B";
    context.fillText("SérieGolo", 0, 0);
}