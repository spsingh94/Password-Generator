// Assignment Code
var generateBtn = document.querySelector("#generate");

// get password area
var passwordText = document.querySelector("#password");
// make this variable equal to the function that you want to connect it with
// var password = clickButton;


//target the password area to update whats inside. make it equal to the variable that is connected
//to your function. this should allow you to update text from your function to the variable which is connected
//to the password area.

//passwordText.value (our text area/password display) is equal to password. password is equal to our function.
// passwordText.value = clickButton;
// Write password to the #password input

var charQuestion = prompt("how many characters would you like the password to be?");
var capAnswer = "";
// capAnswer = charQuestion;
// var capNumArray = [];
// create random upper case letter array
function randomCapLetter() {

  var capLetterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  for (var i = 0; i < charQuestion; i++) {
    capAnswer += capLetterArr[Math.floor(Math.random() * capLetterArr.length)]
  }
  return capAnswer;
  // return capLetterArr[Math.floor(Math.random() * capLetterArr.length)]
}

// create random number array 
function randomNum() {
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  for (var i = 0; i < charQuestion; i++) {
    capAnswer += numArr[Math.floor(Math.random() * numArr.length)]
  }
  return capAnswer;
}

// create random character array 
function randomChar() {
  var charArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"]
  for (var i = 0; i < charQuestion; i++) {
    capAnswer += charArr[Math.floor(Math.random() * charArr.length)]
  }
  return capAnswer;
}

// random lower case letter array 
function randomLowerLetter() {
  var lowerLetterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  for (var i = 0; i < charQuestion; i++) {
    capAnswer += lowerLetterArr[Math.floor(Math.random() * lowerLetterArr.length)]
  }
  return capAnswer;
}

//click event result + password generator
generateBtn.addEventListener("click", function (event) {

  var confirmArr = [
    confirm("Would you like to use capital letters?"),
    confirm("Would you like to use numbers"),
    confirm("Would you like to use lower case letters?"),
    confirm("Would you like to use special characters?")
  ]

  // confirmArr[0] == randomCapLetter();
  // confirmArr[1] == randomNum();
  // confirmArr[2] == randomChar();
  // confirmArr[3] == randomLowerLetter();

  console.log(confirmArr[0]);
  console.log(confirmArr[1]);
  console.log(confirmArr[2]);
  console.log(confirmArr[3]);
  // var answer = '';

  if (confirmArr[0]) {
    confirmArr[0] == randomCapLetter();
    // var answer = '';
    // console.log(capAnswer);
    // for (var i = 0; i < charQuestion; i++) {
    //   answer += capAnswer.charAt(Math.floor(Math.random() * charQuestion * 2))
    // }
    // passwordText.value = answer;
  }
  if (confirmArr[1] == true) {
    confirmArr[1] == randomNum();
    // var answer = '';
    // console.log(capAnswer);
    // for (var i = 0; i < charQuestion; i++) {
    //   answer += capAnswer.charAt(Math.floor(Math.random() * charQuestion * 2))
    // }
    // passwordText.value = answer;
  }
  if (confirmArr[2] == true) {
    confirmArr[2] == randomChar();
    // var answer = '';
    // console.log(capAnswer);
    // for (var i = 0; i < charQuestion; i++) {
    //   answer += capAnswer.charAt(Math.floor(Math.random() * charQuestion * 2))
    // }
    // passwordText.value = answer;
  }
  if (confirmArr[3] == true) {
    confirmArr[3] == randomLowerLetter();
  };

    var answer = '';
    console.log(capAnswer);
    for (var i = 0; i < charQuestion; i++) {
      answer += capAnswer.charAt(Math.floor(Math.random()))
    }
    passwordText.value = answer * charQuestion;
  
  




  // if (confirmArr[2] === false && confirmArr[3] === false) {
  //   randomCapLetter();
  //   randomNum();
  //   var answer = '';
  //   console.log(capAnswer);
  //   for (var i = 0; i < charQuestion; i++) {
  //     answer += capAnswer.charAt(Math.floor(Math.random() * charQuestion * 2))
  //   }
  //   passwordText.value = answer;
  // };

  // if false
  // randomCapLetter() === confirmArr[0];
  // randomNum() === confirmArr[1];
  // randomChar() === confirmArr[2];
  // randomLowerLetter() === confirmArr[3];

//   for (i = 0; i < confirmArr; i++); {
// confirmArr;
//     if (confirmArr[i] == true) {
//       console.log (indexOf.confirmArr);
//       var answer = '';
//       console.log(capAnswer);
//       for (var i = 0; i < charQuestion; i++) {
//         answer += capAnswer.charAt(Math.floor(Math.random() * charQuestion * 2))
//       }
//       return (capAnswer);
//     };
//   };

  //   if (confirmArr[i]) {
  //     randomCapLetter();
  //     randomNum();
  //     randomChar();
  //     randomLowerLetter();
  //     var answer = '';
  //     console.log(capAnswer);
  //     for (var i = 0; i < charQuestion; i++) {
  //       answer += capAnswer.charAt(Math.floor(Math.random() * charQuestion * 2))
  //     }
  //     passwordText.value = answer;
  //   } if (confirmArr[i] === false) {
  //     return confirmArr[i];
  //   }
  //   else {
  //     console.log("error");
// }
});

