
var generateBtn = document.querySelector("#generate");

var upc1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lpc1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var n1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var s1 = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

function generatePassword() {
  var result = [];
  var user = "";

  

    var charLength = prompt("How many characters would you like to have between 8 to 128?"); 
    
    if(charLength < 8 || charLength > 128) {
      alert("You can only have a length of at least 8 characters and no more than 128 characters");
    }

    var upperCase = confirm("Do you want to include uppercase characters in your password?");
    var lowerCase = confirm("Do you want to include lowercase characters in your password?");
    var number = confirm("Do you want to include symbols in your password?");
    var symbol = confirm("Do you want to include numbers in your password?");
      
      if (upperCase === true) {
        (result.push.apply(charLength, upc1));
      }
      if (lowerCase === true) {
        (result.push(charLength, lpc1));
      }
      if (number === true) {
        (result.push(charLength, n1));
      }
      if (symbol === true) {
        (result.push(charLength, s1));
      }
      if (charLength.length === 0){
        alert("Type some characters to proceed with the password generator! \nStarting Over.");
      }
      else{
        for (var i = 0; i < charLength; i ++) {
        var random = Math.floor(Math.random() * result.length);
        user += result[random];
        }
      }
      document.getElementById("password").innerHTML = resultPass;
  }
}
function copyToClipboard() {
  document.getElementById("display").querySelector()
  document.execCommand("Copy");
  alert("Password copied to your clipboard");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyToClipBoardButton.addEventListener("click", copyToClipboard);