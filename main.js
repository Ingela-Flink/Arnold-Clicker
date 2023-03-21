let siffra = 0;

function plusClick(){
console.log("plusClick");
siffra = siffra + 1;

document.getElementById("taltext").innerHTML = siffra;

}

function minusClick(){
console.log("minusClick");
siffra = siffra -1;

document.getElementById("taltext").innerHTML = siffra;
}