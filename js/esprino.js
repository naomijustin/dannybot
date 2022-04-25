
// ===== ORIGINAL FUNCTIONS - SMARTIBOT =====
// var smarti = require("Smartibot");
// var counting = false;
// var count = 0;
// var step = 2;

// function go(drive){
// if (drive == "B"){
//  smarti.setLEDs([0,0,50],[0,0,50]);
//  smarti.setMotor(1,0.7);
//  smarti.setMotor(2,-0.7);
//   step = 4;
//  counting = true;
//  }
//  if (drive == "R"){
//  smarti.setLEDs([50,0,50],[60,0,50]);
//  smarti.setMotor(1,-0.6);
//  smarti.setMotor(2,-0.6);
//    step = 2;
//  counting = true;

 
//  }

//   if (drive == "SR"){
//  smarti.setLEDs([50,0,50],[60,0,50]);
//   smarti.setMotor(1,-0.55);
//  smarti.setMotor(2,-0.55);
//    step = 1;
//  counting = true;

 
//  }
//  if (drive == "L"){
//  smarti.setLEDs([50,0,50],[50,0,50]);
//  smarti.setMotor(1,0.6);
//  smarti.setMotor(2,0.6);
//    step = 2;
//  counting = true;
//  }
//   if (drive == "SL"){
//  smarti.setLEDs([50,0,50],[50,0,50]);
//  smarti.setMotor(1,0.55);
//  smarti.setMotor(2,0.55);
//    step = 1;
//  counting = true;
//  }
//  else if (drive == "F"){
//  smarti.setLEDs([50,0,0],[50,0,0]);
//  smarti.setMotor(1,-0.7);
//  smarti.setMotor(2,0.7);
//    step = 4;
//  counting = true;
//  }
//  else if (drive == "S"){
//  smarti.setLEDs([0,50,0],[0,50,0]);
//  smarti.setMotor(1,0);
//  smarti.setMotor(2,0);
//  } 
// }

// setInterval(function() {
//  if (counting == true){
//  count = count + 1;
//  }
//  if (count > step){
//  counting = false;
//  count = 0;
//  smarti.setMotor(1,0);
//  smarti.setMotor(2,0);
//  }
// }, 50);

// // ===== ADJUSTED FUNCTIONS - TELEPRESENCE ======

// var smarti = require("Smartibot");
// var counting = false;
// var count = 0;
// var step = 2;

// function go(drive){
// if (drive == "B"){
//      // Back/Down
//     smarti.setLEDs([50,0,50],[50,0,50]);
//     smarti.setMotor(1,0.6);
//     smarti.setMotor(2,0.6);
//     step = 4;
//     counting = true;
//  }
//  if (drive == "R"){
//      // Right
//     smarti.setLEDs([50,0,0],[50,0,0]);
//     smarti.setMotor(1,-0.7);
//     smarti.setMotor(2,0.7);
//     step = 2;
//     counting = true;
//  }

//   if (drive == "SR"){
//     smarti.setLEDs([50,0,50],[60,0,50]);
//     smarti.setMotor(1,-0.55);
//     smarti.setMotor(2,0.55);
//     step = 1;
//     counting = true;
//  }
//  if (drive == "L"){
//      // Left
//     smarti.setLEDs([0,0,50],[0,0,50]);
//     smarti.setMotor(1,0.7);
//     smarti.setMotor(2,-0.7);
//     step = 2;
//     counting = true;
    
//  }
//   if (drive == "SL"){
//  smarti.setLEDs([50,0,50],[50,0,50]);
//  smarti.setMotor(1,0.55);
//  smarti.setMotor(2,-0.55);
//    step = 1;
//  counting = true;
//  }
//  else if (drive == "F"){
//     // Up
//     smarti.setLEDs([50,0,50],[60,0,50]);
//     smarti.setMotor(1,-0.6);
//     smarti.setMotor(2,-0.6);
//     step = 4;
//     counting = true;
//  }
//  else if (drive == "PU"){
//     // Pan Up
//     smarti.setLEDs([50,0,50],[60,0,50]);
//     smarti.setMotor(3,0.5);    
//     step = 4;
//     counting = true;
//     setTimeout (function() {
//         smarti.setMotor(3, 0);
//     }, 50);
//  }
//  else if (drive == "PD"){
//     // Pan Down
//     smarti.setLEDs([50,0,50],[60,0,50]);
//     smarti.setMotor(3,-0.5);    
//     step = 4;
//     counting = true;
//     setTimeout (function() {
//         smarti.setMotor(3, 0);
//     }, 50);
//  }
 
//  else if (drive == "S"){
//  smarti.setLEDs([0,50,0],[0,50,0]);
//  smarti.setMotor(1,0);
//  smarti.setMotor(2,0);
//  } 
// }

// setInterval(function() {
//  if (counting == true){
//  count = count + 1;
//  }
//  if (count > step){
//  counting = false;
//  count = 0;
//  smarti.setMotor(1,0);
//  smarti.setMotor(2,0);
//  }
// }, 50);

// ===== ADJUSTED FUNCTIONS - MILKBOT ======

var smarti = require("Smartibot");
var counting = false;
var count = 0;
var step = 2;

function go(drive){
if (drive == "B"){
     // Back/Down
    smarti.setLEDs([50,0,50],[50,0,50]);
    smarti.setMotor(1,0.6);
    smarti.setMotor(2,0.6);
    step = 4;
    counting = true;
 }
 if (drive == "R"){
     // Right
    smarti.setLEDs([50,0,0],[50,0,0]);
    smarti.setMotor(1,-0.7);
    smarti.setMotor(2,0.7);
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
     // Left
    smarti.setLEDs([0,0,50],[0,0,50]);
    smarti.setMotor(1,0.7);
    smarti.setMotor(2,-0.7);
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
    smarti.setMotor(1,-0.6);
    smarti.setMotor(2,-0.6);
    step = 4;
    counting = true;
 }
 else if (drive == "PU"){
    // Pan Up
    smarti.setLEDs([50,0,50],[60,0,50]);
    smarti.setMotor(3,0.5);    
    step = 4;
    counting = true;
    setTimeout (function() {
        smarti.setMotor(3, 0);
    }, 50);
 }
 
 else if (drive == "L0") {
   // Servo Left 0
   smarti.setLEDs([0,50,0],[0,50,0]);
   smarti.setServo(1,0);
}
 else if (drive == "L50") {
   // Servo Left 50
   smarti.setLEDs([0,50,0],[0,50,0]);
   smarti.setServo(1,50);
}
else if (drive == "L100") {
   // Servo Left 50
   smarti.setLEDs([0,50,0],[0,50,0]);
   smarti.setServo(1,85);
}
else if (drive == "R0") {
   // Servo Right 0
   smarti.setLEDs([0,50,0],[0,50,0]);
   smarti.setServo(2,0);
}
else if (drive == "R50") {
   // Servo Right 50
   smarti.setLEDs([0,50,0],[0,50,0]);
   smarti.setServo(2,50);
}
else if (drive == "R100") {
   // Servo Right 50
   smarti.setLEDs([0,50,0],[0,50,0]);
   smarti.setServo(2,85);
}
 
 else if (drive == "S"){
 smarti.setLEDs([0,50,0],[0,50,0]);
 smarti.setMotor(1,0);
 smarti.setMotor(2,0);
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


