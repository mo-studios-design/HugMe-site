const comforts = [

  "慢慢來也沒關係。",

  "今天辛苦了。",

  "先休息一下吧。",

  "這一刻，你可以不用假裝沒事。",

  "有些難過被看見，就已經輕了一點。"

];

function eatEmotion() {

  const message =
    document.getElementById("message").value;

  const result =
    document.getElementById("result");

  const paperNote =
    document.getElementById("paperNote");

  const monster =
    document.getElementById("monster");

  if(message.trim() === "") {

    alert("先寫下一點情緒吧。");

    return;
  }

  document.body
    .classList.add("after-submit");

  result.classList.add("hidden");

  paperNote.classList.remove("hidden");

  paperNote.classList.add("fly");

  monster.classList.add("eating");

  setTimeout(function () {

    paperNote.classList.add("hidden");

    paperNote.classList.remove("fly");

    monster.classList.remove("eating");

    document.getElementById("message").value = "";

    const randomText =
      comforts[Math.floor(Math.random() * comforts.length)];

    document.getElementById("comfortText").innerText =
      randomText;

    result.classList.remove("hidden");

  }, 1100);
}

function writeAgain() {

  document.body
    .classList.remove("after-submit");

  document.getElementById("result")
    .classList.add("hidden");

  document.getElementById("message")
    .focus();

  window.scrollTo({

    top: 0,

    behavior: "smooth"
  });
}