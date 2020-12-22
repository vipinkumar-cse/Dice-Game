
function clicked() {

  for(var i=1;i<=1;i++){
    dicenumber1 = Math.floor(Math.random()*6)+1;
    if(dicenumber1===1){
      document.querySelector("#p1").setAttribute("src","images/dice1.png");
    }
    else if(dicenumber1===2){
      document.querySelector("#p1").setAttribute("src","images/dice2.png");
    }
    else if(dicenumber1===3){
      document.querySelector("#p1").setAttribute("src","images/dice3.png");
    }

    else if(dicenumber1===4){
      document.querySelector("#p1").setAttribute("src","images/dice4.png");
    }

    else if(dicenumber1===5){
      document.querySelector("#p1").setAttribute("src","images/dice5.png");
    }

    else{
      document.querySelector("#p1").setAttribute("src","images/dice6.png");
    }

// For player 2
    dicenumber2 = Math.floor(Math.random()*6)+1;
    if(dicenumber2===1){
      document.querySelector("#p2").setAttribute("src","images/dice1.png");
    }
    else if(dicenumber2===2){
      document.querySelector("#p2").setAttribute("src","images/dice2.png");
    }
    else if(dicenumber2===3){
      document.querySelector("#p2").setAttribute("src","images/dice3.png");
    }

    else if(dicenumber2===4){
      document.querySelector("#p2").setAttribute("src","images/dice4.png");
    }

    else if(dicenumber2===5){
      document.querySelector("#p2").setAttribute("src","images/dice5.png");
    }

    else{
      document.querySelector("#p2").setAttribute("src","images/dice6.png");
    }

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
