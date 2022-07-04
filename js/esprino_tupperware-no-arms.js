// ====== TUPPERWARE BOT WITH ARMS FOR ESPRINO ========

var smarti = require("Smartibot");
var counting = false;
var count = 0;
var step = 2;

function go(drive){
if (drive == "B"){
     // Back/Down
    smarti.setLEDs([50,0,50],[50,0,50]);
    smarti.setMotor(1,-0.7); //Back
    smarti.setMotor(2,0.7); //Back    
    step = 4;
    counting = true;
 }
 if (drive == "R"){
     // Right
    smarti.setLEDs([50,0,0],[50,0,0]);
    smarti.setMotor(1,-0.6); //Rght
    smarti.setMotor(2,-0.6); // Right
    step = 2;
    counting = true;
 }

  if (drive == "SR"){
    smarti.setLEDs([50,0,50],[60,0,50]);
    smarti.setMotor(1,-0.55);
    smarti.setMotor(2,0.55);
    step = 1;
    counting = true;
 }
 if (drive == "L"){
    smarti.setLEDs([0,0,50],[0,0,50]);
    smarti.setMotor(1,0.6); //Left
    smarti.setMotor(2,0.6); //Left
    step = 2;
    counting = true;
    
 }
  if (drive == "SL"){
 smarti.setLEDs([50,0,50],[50,0,50]);
 smarti.setMotor(1,0.55);
 smarti.setMotor(2,-0.55);
   step = 1;
 counting = true;
 }
 else if (drive == "F"){
    // Up
    smarti.setLEDs([50,0,50],[60,0,50]);
    smarti.setMotor(1,0.7); //Forward
    smarti.setMotor(2,-0.7); //Forward    
    step = 4;
    counting = true;
 }

// === TILT PHONE ===
else if (drive == "TU") {
   smarti.setLEDs([50,0,50],[50,0,50]);
   smarti.setMotor(3,0.6);
   smarti.setMotor(4,0.6);
   setTimeout (function() {
      smarti.setMotor(3, 0);
      smarti.setMotor(4, 0);
   }, 50);
}

else if (drive == "TD") {
   smarti.setLEDs([50,0,50],[50,0,50]);
   smarti.setMotor(3,-0.6); 
   smarti.setMotor(4,-0.6);
   setTimeout (function() {
      smarti.setMotor(3, 0);
      smarti.setMotor(4, 0);
   }, 50);
}

// == STOP ==
 else if (drive == "S"){
 smarti.setLEDs([0,50,0],[0,50,0]);
 smarti.setMotor(1,0);
 smarti.setMotor(2,0);
 smarti.setMotor(3,0);
 smarti.setMotor(4,0);
 smarti.setServo(1,0);
 smarti.setServo(2,0);
 } 
}

setInterval(function() {
 if (counting == true){
 count = count + 1;
 }
 if (count > step){
 counting = false;
 count = 0;
 smarti.setMotor(1,0);
 smarti.setMotor(2,0);
 }
}, 50);


