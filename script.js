
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upc1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lpc1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var n1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var s1 = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

  var result = [];
  var user = [];

    var upper = confirm("Do you want to include uppercase characters in your password?");
    var lower = confirm("Do you want to include lowercase characters in your password?");
    var number = confirm("Do you want to include symbols in your password?");
    var symbol = confirm("Do you want to include numbers in your password?");
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
      if (symbol === true) {
        (newPwd.push(s1));
      }
    }
function writePassword(){

}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  
  passwordText.value = password;
  return "password"
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
