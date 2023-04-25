let siffra = 0;
document.getElementById("taltext").innerHTML = siffra;

function plusClick(){
console.log("plusClick");
siffra = siffra + 1;
var image = new Image();
var x = event.clientX;
var y = event.clientY;
var fade_out = function() {
  image.style.display = "none";
}
image.src = 'img/Bicep.png';
image.style.width = '49px';
image.style.height = '40px';
image.style.transform = 'translate(-50%, -50%)';
image.style.display = 'block';
image.style.position = 'absolute';
image.style.left = x + 'px';
image.style.top = y + 'px';
setTimeout(fade_out, 3000)
document.body.appendChild(image); 
}

function plusEttClick(){

  if (siffra > 9) {
    siffra = siffra - 10;
  } else {alert('FAN')}
}






      
    

/*
function minusClick(){
console.log("minusClick");
siffra = siffra -1;

document.getElementById("taltext").innerHTML = siffra;
}
*/