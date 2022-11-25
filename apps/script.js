const own1text = document.querySelector("#own1");
const price1text = document.querySelector("#price1");
const own2text = document.querySelector("#own2");
const price2text = document.querySelector("#price2");
//net calci
const bp1text = document.querySelector("#bp1");
const sp1text = document.querySelector("#sp1");
const no1text = document.querySelector("#no1");

const averageRes = document.querySelector("#average-res");
const netRes = document.querySelector("#net-res");
const netCard = document.querySelector("#netcard");

const typeNet = document.querySelectorAll(".typeNet");
const typeAvg = document.querySelectorAll(".typeAvg");

const d6submit = document.querySelector("#d6submit");
//Average Calculator

function avgg(e, current) {
  e.preventDefault();
  var totalWhole;
  var r1Res;
  totalWhole = parseInt(own1text.value) + parseInt(own2text.value);
  var r1Res =
    own1text.value * price1text.value +
    (own2text.value * price2text.value) / totalWhole;

  averageRes.innerHTML =
    "The total number of shares you now own are " +
    totalWhole +
    " shares! <br> The average price will be " +
    r1Res +
    " per share";
}

//NET CALCULATOR

function nett(e, current) {
  e.preventDefault();
  var net;
  var tax;
  var diff = sp1text.value - bp1text.value;
  net = diff * no1text.value;
  tax = net * 0.3;
  avgResult = net - tax;

  if (avgResult > 0) {
    document.querySelector("#netcard").style.backgroundColor = "#d4ffac";
    netRes.innerHTML =
      "Difference = " +
      diff +
      "<br>Tax = " +
      tax +
      "<br>Profit = " +
      avgResult +
      "";
  } else {
    document.querySelector("#netcard").style.backgroundColor = "#ffbdac";
    netRes.innerHTML = "Difference = " + diff + "<br>Loss = " + avgResult + "";
  }
}
typeNet.forEach((item) => {
  item.addEventListener(
    "input",
    function (e) {
      nett(e, this);
    },
    false
  );
});
typeAvg.forEach((item) => {
  item.addEventListener(
    "input",
    function (e) {
      avgg(e, this);
    },
    false
  );
});

d6submit.addEventListener('click',function(e){
document.querySelector('#dice-result').innerHTML = (Math.floor(Math.random() * document.querySelector('#d6limit').value))+1;
e.preventDefault;
});

//for color app
const hexsubmit  = document.querySelector('#hexsubmit');
hexsubmit.addEventListener('click', function(e){
  const colorDef = document.createElement('div');
  colorDef.setAttribute('class','clrp');
  const tempcolor = document.querySelector('#hexcard').value;
  console.log(typeof tempcolor)
  colorDef.style.backgroundColor = tempcolor;
  document.querySelector('#clrpContainer').appendChild(colorDef);
  e.preventDefault;
  })

  //for RPS app
let userScore =0;
let drawScore =0;
let cpScore = 0;
const rpsResult = document.querySelector('#rpsResult');
  document.addEventListener('click', event => {

    if (event.target.tagName == 'DIV' && event.target.parentElement.className == 'rpsRow') { 
     // stuff to execute
    //  alert(`${event.target.getAttribute('data-rps')} button pressed`);  
    const options = ["ROCK","PAPER","SCISSORS"]
    let computerSelection = options[Math.floor(Math.random() * 3)];
    let playerSelection = event.target.getAttribute('data-rps');

    playerSelection = playerSelection.toUpperCase();
    computerSelection =computerSelection.toUpperCase();
  if(playerSelection === "ROCK"){
    if(computerSelection === "SCISSORS"){
rpsWin(playerSelection,computerSelection);

        
    }
    if(computerSelection === "ROCK"){
      rpsDraw(playerSelection,computerSelection);
    }
    if(computerSelection === "PAPER"){
      rpsLose(playerSelection,computerSelection);
    }
  }
  if(playerSelection === "SCISSORS"){
    if(computerSelection === "SCISSORS"){
      rpsDraw(playerSelection,computerSelection);
    }
    if(computerSelection === "ROCK"){
      rpsLose(playerSelection,computerSelection);
    }
    if(computerSelection === "PAPER"){
      rpsWin(playerSelection,computerSelection);
    }
  }
  if(playerSelection === "PAPER"){
    if(computerSelection === "SCISSORS"){
      rpsLose(playerSelection,computerSelection);
    }
    if(computerSelection === "ROCK"){
      rpsWin(playerSelection,computerSelection);
    }
    if(computerSelection === "PAPER"){
      rpsDraw(playerSelection,computerSelection);
    }
  }
if(userScore == 5 || cpScore == 5){
  if(userScore == 5){
    rpsResult.textContent = `VICTORY!! W:${userScore},D:${drawScore}, L:${cpScore},`;
  }
  if(cpScore == 5){
    rpsResult.textContent = `DEFEAT!! W:${userScore},D:${drawScore}, L:${cpScore},`;
  }
  userScore = 0;
  cpScore = 0;
  drawScore=0;
}
else{
  rpsResult.textContent = `W:${userScore},D:${drawScore}, L:${cpScore},`;
}
    
    }
  }
  )

  function rpsWin(playerSelection,computerSelection){
    userScore = userScore + 1;
    document.querySelector(`[data-rps ="${playerSelection}"]`).classList.add('rpsG');
    document.querySelector(`[data-rpsm ="${computerSelection}"]`).classList.add('rpsR');
    setInterval(function() {document.querySelector(`[data-rps ="${playerSelection}"]`).classList.remove('rpsG')}, 1100);
    setInterval(function() {document.querySelector(`[data-rpsm ="${computerSelection}"]`).classList.remove('rpsR')}, 1100);
  }
  function rpsLose(playerSelection,computerSelection){
    cpScore = cpScore + 1;
    document.querySelector(`[data-rps ="${playerSelection}"]`).classList.add('rpsR');
    document.querySelector(`[data-rpsm ="${computerSelection}"]`).classList.add('rpsG');
    setInterval(function() {document.querySelector(`[data-rps ="${playerSelection}"]`).classList.remove('rpsR')}, 1100);
    setInterval(function() {document.querySelector(`[data-rpsm ="${computerSelection}"]`).classList.remove('rpsG')}, 1100);
  }
  function rpsDraw(playerSelection,computerSelection){
    drawScore = drawScore + 1;
    document.querySelector(`[data-rps ="${playerSelection}"]`).classList.add('rpsY');
    document.querySelector(`[data-rpsm ="${computerSelection}"]`).classList.add('rpsY');
    setInterval(function() {document.querySelector(`[data-rps ="${playerSelection}"]`).classList.remove('rpsY')}, 1100);
    setInterval(function() {document.querySelector(`[data-rpsm ="${computerSelection}"]`).classList.remove('rpsY')}, 1100);
  }