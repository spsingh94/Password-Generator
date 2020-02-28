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
  var capQuest = prompt("Would you like to use capital letters?");
  var numQuest = prompt("Would you like to use numbers");
  var lowerQuest = prompt("Would you like to use lower case letters?")
  var charQuest = prompt("Would you like to use special characters?")
  // make conditionals for the 4 possible scenarios (yy, yn, ny, nn)


  // yes yes yes yes

  if ("yes" + "yes" + "yes" + "yes") {
    return (randomCapLetter() + randomCapLetter() + randomNum() + randomNum() +
      randomLowerLetter() + randomLowerLetter() + randomChar() + randomChar())
  }

  // yes yes yes no

  if ("yes" + "yes" + "yes" + "no") {
    return (randomCapLetter() + randomCapLetter() + randomCapLetter() + randomNum() +
      randomNum() + randomLowerLetter() + randomLowerLetter() + randomLowerLetter())
  }

  // yes yes no yes

  if ("yes" + "yes" + "no" + "yes") {
    return (randomCapLetter() + randomCapLetter() + randomCapLetter() + randomNum() +
      randomNum() + randomChar() + randomChar() + randomChar())
  }

  // yes no yes yes

  if ("yes" + "no" + "yes" + "yes") {
    return (randomCapLetter() + randomCapLetter() + randomCapLetter() + randomChar() +
      randomChar() + randomLowerLetter() + randomLowerLetter() + randomLowerLetter())
  }

  // no yes yes yes

  if ("no" + "yes" + "yes" + "yes") {
    return (randomNum() + randomNum() + randomNum() + randomChar() + randomChar() +
      randomLowerLetter() + randomLowerLetter() + randomLowerLetter())
  }

  // yes yes no no

  if ("yes" + "yes" + "no" + "no") {
    return (randomCapLetter() + randomCapLetter() + randomCapLetter() +
      randomCapLetter() + randomNum() + randomNum() + randomNum() + randomNum())

  }

  // yes no no yes 

  if ("yes" + "no" + "no" + "yes") {
    return (randomCapLetter() + randomCapLetter() + randomCapLetter() +
      randomCapLetter() + randomChar() + randomChar() + randomChar() + randomChar())
  }

  // no no yes yes

  if ("no" + "no" + "yes" + "yes") {
    return (randomLowerLetter() + randomLowerLetter() + randomLowerLetter() +
      randomLowerLetter() + randomChar() + randomChar() + randomChar() + randomChar())
  }

  // no yes yes no

  if ("no" + "yes" + "yes" + "no") {
    return (randomNum() + randomNum() + randomNum() + randomNum() + randomLowerLetter() +
      randomLowerLetter() + randomLowerLetter() + randomLowerLetter())
  }

  // yes no no no

  if ("yes" + "no" + "no" + "no") {
    return (randomCapLetter() + randomCapLetter() + randomCapLetter() + randomCapLetter() +
      randomCapLetter() + randomCapLetter() + randomCapLetter() + randomCapLetter())
  }

  // no no no yes 

  if ("no" + "no" + "no" + "yes") {
    return (randomChar() + randomChar() + randomChar() + randomChar() + randomChar() +
      randomChar() + randomChar() + randomChar())
  }

  // no yes no no 

  if ("no" + "yes" + "no" + "no") {
    return (randomNum() + randomNum() + randomNum() + randomNum() +
      randomNum() + randomNum() + randomNum() + randomNum())
  }

  // no no yes no

  if ("no" + "no" + "yes" + "no") {
    return (randomLowerLetter() + randomLowerLetter() + randomLowerLetter() + randomLowerLetter() +
      randomLowerLetter() + randomLowerLetter() + randomLowerLetter() + randomLowerLetter())
  }

  // no no no no

  if ("no" + "no" + "no" + "no") {
    alert("ERROR! Must make a selection to generate password.")
  }

}

// create random upper case letter array
function randomCapLetter() {
  var capLetterArr = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  return capLetterArr[Math.floor(Math.random() * capLetterArr.length)]
}

// create random number array 
function randomNum() {
  var numArr = ("0123456789")
  return numArr[Math.floor(Math.random() * numArr.length)]
}

// create random character array 
function randomChar() {
  var charArr = ("!@#$%^&*()_-=+")
  return charArr[Math.floor(Math.random() * charArr.length)]
}

// random lower case letter array 
function randomLowerLetter() {
  var lowerLetterArr = ("abcdefghijklmnopqrstuvwxyz")
  return lowerLetterArr[Math.floor(Math.random() * lowerLetterArr.length)]
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
