
function clicked() {

  for(var i=1;i<=1;i++){
    dicenumber1 = Math.floor(Math.random()*6)+1;
    var a = "images/dice"+dicenumber1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",a);
    dicenumber2 = Math.floor(Math.random()*6)+1;
    var a = "images/dice"+dicenumber2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",a);

if (dicenumber1===dicenumber2 ){
document.querySelector("#result").textContent = "Draw 😐";
}
else if(dicenumber1>dicenumber2){
document.querySelector("#result").textContent = "Player 1 Won 🏆";
}
else {
  document.querySelector("#result").textContent = "Player 2 Won 🏆";
}


  }
}
