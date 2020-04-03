// Retrieve button
var generateBtn = document.querySelector("#generate");

// Get password display area
var passwordText = document.querySelector("#password");

// Prompt variable -- assigned later in code
var charQuestion
// Answer string variable which contains characters that the answer variable can pick from -- assigned later in code 
var answerString

// Capital letter function
function randomCapLetter() {
  var capLetterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  // Created to choose random characters from array
  for (var i = 0; i < charQuestion; i++) {
    answerString += capLetterArr[Math.floor(Math.random() * capLetterArr.length)]
  }
  // Random characters sent to answer string variable
  return answerString;
}
// Number function
function randomNum() {
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  for (var i = 0; i < charQuestion; i++) {
    answerString += numArr[Math.floor(Math.random() * numArr.length)]
  }
  return answerString;
}
// Lower case letter array
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

// Click event function -- gives user questions on password preference and generates password
generateBtn.addEventListener("click", function (event) {
// Random characters inserted here for the answer variable to choose from
  answerString = "";
// User password preference array followed by prompt for password length preference
  var confirmArr = [
    confirm("Would you like to add capital letters?"),
    confirm("Would you like to add numbers?"),
    confirm("Would you like to add lower case letters?"),
    confirm("Would you like to add special characters?"),
  ]
  charQuestion = prompt("Password Length - Choose between 8 and 32 characters.");
// if statements created to identify whether the confirms in confirmArr returned true or false
  if (confirmArr[0])
    randomCapLetter();

  if (confirmArr[1])
    randomNum();

  if (confirmArr[2])
    randomLowerLetter();

  if (confirmArr[3])
    randomChar();
// if statement which displays an error message if the user does not respond to CharQuestion(password length prompt)
  if (charQuestion == false)
    return confirm("ERROR! You must enter a password length - Choose between 8 and 32 characters. ");
// else if statement which displays an error message if the user responds to charQuestion with a number less than 8
  else if (charQuestion < 8)
    return confirm("ERROR! Length must be between 8 and 32 characters.");
// else if statement which displays an error message if the user responds to charQuestion with a number greater than 32
  else if (charQuestion > 32)
    return confirm("ERROR! Length must be between 8 and 32 characters.");
// answer variable declared
  var answer = '';
  // for loop which iterates through the answerString variable and adds characters to the answer variable
  for (var i = 0; i < charQuestion; i++) {
    answer += answerString.charAt(Math.floor(Math.random() * answerString.length));
    console.log(answerString.charAt(Math.floor(Math.random() * answerString.length)));
  }
  // Forcing the answer variable to display on web page (password area) -- altering the value of passwordText with the answer variable 
  passwordText.value = answer;
  // placed to reset the answerString variable every time a new password is wanted
  delete answerString;
});
