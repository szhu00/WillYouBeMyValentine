let noButton = document.getElementById("noButton");
let yesbutton = document.getElementById("yesButton");
let messages = ["Please?", "Try Again", ">:(", "But:("];
let NoClickCount = 0;

noButton.addEventListener("click", () => {
  let left = Math.floor(Math.random() * 1000) + 1;
  let right = Math.floor(Math.random() * 700) + 1;
  let bottom = Math.floor(Math.random() * 300) + 1;
  noButton.style.left = left + "px";
  noButton.style.right = right + "px";
  noButton.style.bottom = bottom + "px";
  noButton.style.width = 120 + "px";
  noButton.style.height = 60 + "px";
  noButton.textContent = getRandomMessage(messages);
  NoClickCount++;
  if (NoClickCount == 4) {
    alert("WARNING: You better click YES >:(!!!");
  }
  if (NoClickCount > 4) {
    location.replace("/iHateYou.html");
  }
});

yesbutton.addEventListener("click", () => {
  alert("I love you too Jem. Let go on a date :) - Serena <3");
  noButton.style.visibility = "hidden";
});

function getRandomMessage(list) {
  return list[Math.floor(Math.random() * list.length)];
}
