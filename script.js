
var generateBtn = document.querySelector("#generate");
// Setting variables for Javascript
var upc1 = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
var lpc1 = "abcdefghijklmopqrstuvwxyz";
var n1 = "12345677890";
var s1 = "!@#$%^&*()_+";
//To store newly chosen password using global variables.
var newPassword =[];

var charLength = parseInt(prompt("Your passwords shoud b"))
//Input for the user to make decision for the password.
function userChoice(){
    var upper = confirm("Do you want to include uppercase characters in your password?")
    var lower = confirm("Do you want to include lowercase characters in your password?")
    var number = confirm("Do you want to include symbols in your password?")
    var symbol = confirm("Do you want to include numbers in your password?")
    //Saving user's input choices to form new password.
    if (upper === true) {
      (newPwd.push(upc1));
    }
    if (lower === true) {
      (newPwd.push(lpc1));
    }
    if (number === true) {
      (newPwd.push(n1));
    }
    if (symbol === true){
      (newPwd.push(s1));
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
