/*let siffra = 0;

function plusClick(){
console.log("plusClick");
siffra = siffra + 1;

document.getElementById("taltext").innerHTML = siffra;
}
*/

function plusClick(){
    console.log("ARNOLD");
    var x = event.clientX;
    var y = event.clientY;
    var bild = document.getElementById("bicep");
    bild.style.display = 'block';
    bild.style.position = 'absolute';
    bild.style.left = x + 'px';
    bild.style.top = y + 'px';
setTimeout(fade_out, 3000);
}
var fade_out = function() {
    bicep.style.display = "none";
  }

  






      
    

/*
function minusClick(){
console.log("minusClick");
siffra = siffra -1;

document.getElementById("taltext").innerHTML = siffra;
}
*/