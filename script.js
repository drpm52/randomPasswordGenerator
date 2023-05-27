"use strict";
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let passcode1 = [];
let passcode2 = [];
let numberOfCharactersEl = document.querySelector(".input-text");
const pw1El = document.querySelector(".middle-left");

const pw2El = document.querySelector(".middle-right");

const passwordGeneratorBtn = document.querySelector(".password-generator");

const symbolsBtn = document.getElementById("symbol");
const numbersBtn = document.getElementById("number");



function createPasscode() {
  passcode1 = [];
  passcode2 = [];
  let numberOfCharacters = numberOfCharactersEl.value
    ? numberOfCharactersEl.value
    : 12;

  while (passcode1.length < numberOfCharacters) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomCharacter = characters[randomIndex];

    if (!passcode1.includes(randomCharacter)) {
      passcode1.push(randomCharacter);
      pw1El.textContent = passcode1.join("");
    }

    while (passcode2.length < numberOfCharacters) {
      let randomIndex2 = Math.floor(Math.random() * characters.length);
      let randomCharacter2 = characters[randomIndex2];
      if (!passcode2.includes(randomCharacter2)) {
        passcode2.push(randomCharacter2);

        pw2El.textContent = passcode2.join("");
      }
    }
  }
}

function generateSymbols(){
  pw

}
function generateNumbers(){
  console.log("click numbers");
}

async function copyPw(whichpw) {
  //  whichpw.textContent.select();
  //   whichpw.setSelectionRange(0, 999999);

  console.log(await navigator.clipboard.writeText(whichpw.textContent));
  alert(`Copied the text: ${whichpw.textContent}`);
} // Get the text field

// function copyPw (){
//   function myFunction() {
//      var copyText = document.getElementById("myInput");

//       // Select the text field
//    copyText.select();
//      copyText.setSelectionRange(0, 99999); // For mobile devices

//        // Copy the text inside the text field
//      navigator.clipboard.writeText(copyText.value);

//       // Alert the copied text
//      alert("Copied the text: " + copyText.value);
// }
//   }

// }

passwordGeneratorBtn.addEventListener("click", createPasscode);
pw1El.addEventListener("click", function () {
  copyPw(pw1El);
});
pw2El.addEventListener("click", function () {
  copyPw(pw2El);
});

symbolsBtn.addEventListener("click", generateSymbols)
numbersBtn.addEventListener("click", generateNumbers)
