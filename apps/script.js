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