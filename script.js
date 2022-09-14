// Assignment Code
var generateBtn = document.querySelector("#generate");

var charactersTobeUsed = [];
var numberOfChar;
const letters = [
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
];
const bigLetters = [
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
];
const numbers = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
const specials = [
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
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  "'",
  ":",
  "\\",
  "|",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let chosen = defineParam();

  let selected = "";
  for (let i = 0; i < numberOfChar; i++) {
    randomNum = Math.floor(Math.random() * chosen.length);
    selected = selected.concat(chosen[randomNum]);
  }

  console.log(selected);
  return selected;
}
function defineParam() {
  while (typeof numberOfChar !== "number" || numberOfChar < 8 || numberOfChar > 128) {
    numberOfChar = Number(
      prompt("How many characters should your password be? Minimum 8, Maximum 128.")
    );
  }

  if (confirm("Woukd you like to include Numbers?")) {
    charactersTobeUsed = charactersTobeUsed.concat(numbers);
  }

  if (confirm("Woukd you like to include letters?")) {
    charactersTobeUsed = charactersTobeUsed.concat(letters);
  }

  if (confirm("Woukd you like to include CAPITAL letters?")) {
    charactersTobeUsed = charactersTobeUsed.concat(bigLetters);
  }
  if (confirm("Woukd you like to include Special Characters?")) {
    charactersTobeUsed = charactersTobeUsed.concat(specials);
  }

  // console.log(charactersTobeUsed);

  let pass = charactersTobeUsed.join("")
  // console.log(pass);
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
