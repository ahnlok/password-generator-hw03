
var generateBtn = document.querySelector("#generate");
//Static variables
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

// Function to choose th password length
function passwordLength() {
    
  var charList = [];
  var completePwd = "";
  
  var charLength = prompt("How many characters would you like to have between 8 to 128?")
    if(charLength < 8 || charLength >128){
      alert("You have to choose password length between 8 and 128 long"); 
    }
}
// Function to choose the password combinations
function generatePassword(){
    var pwd =  "";

    var upperCase = confirm("Do you want to include uppercase characters in your password?");
    var lowerCase = confirm("Do you want to include lowercase characters in your password?");
    var number1 = confirm("Do you want to include symbols in your password?");
    var symbol1 = confirm("Do you want to include numbers in your password?");
  
      if (upperCase === true) {
        pwd.push(upperC);
      }
      if (lowerCase === true) {
        pwd.push(lowerC);
      }
      if (number1 === true) {
        pwd.push(number);
      }
      if (symbol1 === true) {
        pwd.push(symbol);
      }

    var completePassword = [];
    
      for(var i =0; i < combinations.length; i++) {
        var random = Math.floor(Math.random() * Math.floor(pwd.length));
        completePassword.push(pwd[random]);
      }
     
      var complete = completePassword.join("");
      document.getElementById("password").innerHTML = resultPass;
}

function copyToClipboard() {
  document.getElementById("display").querySelector()
  document.execCommand("Copy");
  alert("Password copied to your clipboard");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyToClipBoardButton.addEventListener("click", copyToClipboard);