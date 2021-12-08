const startGame = document.getElementById("startGame");
const charTitle = document.getElementById("charTitle");
const nameTitle = document.getElementById("nameTitle");
const keyCode = document.getElementById("keyCode");
const keyChar = document.getElementById("keyChar");
const keyName = document.getElementById("keyName");

const printKey = (e) => {
  startGame.innerText !== "" && (startGame.innerText = "");

  charTitle.innerHTML !== "Key:&nbsp;" && (charTitle.innerHTML = "Key:&nbsp;");
  nameTitle.innerHTML !== "KeyName:&nbsp;" &&
    (nameTitle.innerHTML = "KeyName:&nbsp;");

  keyCode.innerText = e.keyCode;
  keyChar.innerText = e.key === " " ? "Space" : e.key;
  keyName.innerText = e.code;
};

window.addEventListener("keydown", printKey);
