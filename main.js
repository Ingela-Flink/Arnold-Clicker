let siffra = 0;
let plusSiffra = 0;
let kostnad = 30;

function plusClick(){
console.log("plusClick");
siffra = siffra + 1 + plusSiffra;
document.getElementById("taltext").innerHTML = siffra;
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
image.style.display = 'block'
image.style.position = 'absolute';
image.style.left = x + 'px';
image.style.top = y + 'px';
image.style.zIndex = '2';
setTimeout(fade_out, 3000)
document.body.appendChild(image);
if (siffra >= 1000){
  alert("NU KAN VI KÖRA LEAGUE")
} else {}
}

function plusEttClick(){

  if (siffra >= kostnad) {
    siffra = siffra - kostnad;
    kostnad = Math.round(kostnad * 1.3 + 30);
    plusSiffra = plusSiffra + 1;
  } else {alert('FAN')}
  document.getElementById("taltext").innerHTML = siffra;
  document.getElementById("costdisplay1").textContent = kostnad
}







      
    

/*
function minusClick(){
console.log("minusClick");
siffra = siffra -1;

document.getElementById("taltext").innerHTML = siffra;
}
*/