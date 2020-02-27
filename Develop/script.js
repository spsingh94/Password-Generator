// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // prompt the user 2 questions (cap letter?, number?)
prompt ("Would you like to use a capital letter?");
prompt ("Would you like to use a number");
  // make conditionals for the 4 possible scenarios (yy, yn, ny, nn)

  //







}


function randomCapLetter() {
  var capLetterArr = ("ASDNCSLDVNSLVM")
 return capLetterArr[Math.floor(Math.random() * capLetterArr.length)]
}

// make function to get a random number

function randomNum() {
  var numArr = ("242083404293")
 return numArr[Math.floor(Math.random() * numArr.length)]
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
