let noButton = document.getElementById("noButton");
let yesbutton = document.getElementById("yesButton");
let messages = ["Please?", "Try Again", ">:(", "But:(", "Still NO!?"];
let NoClickCount = 0;

noButton.addEventListener("click", () => {
  let left, right, top, bottom;
  if (window.innerWidth < 600) {
    left = Math.floor(Math.random() * 150);
    right = Math.floor(Math.random() * 100);
    bottom = Math.floor(Math.random() * 600);
    top = Math.floor(Math.random() * 600);
  } else {
    left = Math.floor(Math.random() * window.innerWidth);
    right = Math.floor(Math.random() * window.innerWidth);
    bottom = Math.floor(Math.random() * window.innerHeight);
    top = Math.floor(Math.random() * window.innerHeight);
  }

  noButton.style.left = left + "px";
  noButton.style.right = right + "px";
  noButton.style.bottom = bottom + "px";
  noButton.style.top = top + "px";
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

//yes click event
yesbutton.addEventListener("click", () => {
  noButton.style.visibility = "hidden";
  yesButton.style.visibility = "hidden";
  document.getElementById("question").style.visibility = "hidden";
  document.getElementById("afterMessage").style.visibility = "visible";
  let newImg =
    '<img src="/Assets/valentine.svg" alt="invite" width="500px" height="600px" id = "invite">';
  document.getElementById("img").outerHTML = newImg;

  alert("YAYYYYYYY ^.^");
});

function getRandomMessage(list) {
  return list[Math.floor(Math.random() * list.length)];
}
