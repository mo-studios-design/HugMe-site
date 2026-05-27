const comforts = [

  "慢慢來也沒關係。",

  "今天辛苦了。",

  "你已經撐很久了。",

  "先休息一下吧。",

  "不是所有情緒都需要立刻變好。",

  "世界很吵，但你可以先抱抱自己。"

];

function eatEmotion() {

  const message =
    document.getElementById("message").value;

  if(message.trim() === "") {

    alert("先寫下一點情緒吧。");

    return;
  }

  document.getElementById("message").value = "";

  const randomText =
    comforts[Math.floor(Math.random() * comforts.length)];

  document.getElementById("comfortText").innerText =
    randomText;

  document.getElementById("result")
    .classList.remove("hidden");
}

function writeAgain() {

  document.getElementById("result")
    .classList.add("hidden");

  document.getElementById("message")
    .focus();
}