// Assignment Code
var generateBtn = document.querySelector("#generate");

// get password area
var passwordText = document.querySelector("#password");

var errorMessage = "error";
var charQuestion
var answerString

function randomCapLetter() {

  var capLetterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  for (var i = 0; i < charQuestion; i++) {
    answerString += capLetterArr[Math.floor(Math.random() * capLetterArr.length)]
  }
  return answerString;
  // return capLetterArr[Math.floor(Math.random() * capLetterArr.length)]
}

// create random number array 
function randomNum() {
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  for (var i = 0; i < charQuestion; i++) {
    answerString += numArr[Math.floor(Math.random() * numArr.length)]
  }
  return answerString;
}

// random lower case letter array 
function randomLowerLetter() {
  var lowerLetterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  for (var i = 0; i < charQuestion; i++) {
    answerString += lowerLetterArr[Math.floor(Math.random() * lowerLetterArr.length)]
  }
  return answerString;
}

// create random character array 
function randomChar() {
  var charArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"]
  for (var i = 0; i < charQuestion; i++) {
    answerString += charArr[Math.floor(Math.random() * charArr.length)]
  }
  return answerString;
}

//click event result + password generator

var maninFunc = generateBtn.addEventListener("click", function (event) {

  answerString = "";

  charQuestion = prompt("how many characters would you like the password to be?");
  var confirmArr = [
    confirm("Would you like to use capital letters?"),
    confirm("Would you like to use numbers"),
    confirm("Would you like to use lower case letters?"),
    confirm("Would you like to use special characters?"),
  ]

  console.log(confirmArr[0]);
  console.log(confirmArr[1]);
  console.log(confirmArr[2]);
  console.log(confirmArr[3]);

  if (confirmArr[0])
    randomCapLetter();

  if (confirmArr[1])
    randomNum();

  if (confirmArr[2])
    randomLowerLetter();

  if (confirmArr[3])
    randomChar();

  if (charQuestion == false)
    return confirm("Error. You must enter the amount of characters you would like for your password. Amount must be between 8 and 32 characters. ");

  else if (charQuestion < 8)
    return confirm("Error. you are only allowed to choose between 8 and 32 characters.");

  else if (charQuestion > 32)
    return confirm("Error. you are only allowed to choose between 8 and 32 characters.");

  var answer = '';
  console.log(answerString);
  for (var i = 0; i < charQuestion; i++) {
    answer += answerString.charAt(Math.floor(Math.random() * answerString.length));
    console.log(answerString.charAt(Math.floor(Math.random() * answerString.length)));
  }
  passwordText.value = answer;
  console.log(answer);
  // placed to reset the var
  delete answerString;
});
