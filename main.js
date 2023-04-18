/*let siffra = 0;

function plusClick(){
console.log("plusClick");
siffra = siffra + 1;

document.getElementById("taltext").innerHTML = siffra;
}
*/

/*function plusClick(){
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
*/
function plusClick(){
var image = new Image();
var x = event.clientX;
var y = event.clientY;
image.src = 'img/Bicep.png';
image.style.width = '49px';
image.style.height = '40px';
image.style.transform = 'translate(-50%, -50%)';
image.style.userSelect = 'none';
image.style.display = 'block';
image.style.position = 'absolute';
image.style.left = x + 'px';
image.style.top = y + 'px';
document.body.appendChild(image);
}
  

  






      
    

/*
function minusClick(){
console.log("minusClick");
siffra = siffra -1;

document.getElementById("taltext").innerHTML = siffra;
}
*/