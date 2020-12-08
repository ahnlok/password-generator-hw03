// Setting variables for Javascript
var generateBtn = document.querySelector("#generate");

var upc1 = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

var lpc1 = "abcdefghijklmopqrstuvwxyz";

var n1 = "12345677890";

var s1 = "!@#$%^&*()_+";


//Input for the user to make decision for the password.
function userChoice(){
    var upper = confirm("Do you want to include uppercase characters in your password?")
    var lower = confirm("Do you want to include lowercase charaters in your password?")
    var number = confirm("Do you want to include symbols in your password?")
    var symbol = confirm("Do you want to include numbers in your password?")
}
//Saving user's choices for the questions w/ if statement.
// Write password to the #password input
function writePassword() {
  var length = "";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 

  }

  
  passwordText.value = password;
  return "password"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
