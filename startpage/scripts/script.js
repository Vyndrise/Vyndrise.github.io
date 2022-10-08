const backType = document.querySelector(".backType");
const log = document.getElementById("values");

backType.addEventListener("input", bgurl);

function bgurl(e) {
  document.body.style.backgroundImage = "url('" + backType.value + "')";
}
