// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var upper =["abcdefghijklmopqrstuvwxyz"];
  var lower =["ABCDEFGHIJKLMOPQRSTUVWXYZ"];
  var number =["12345677890"];
  var symbol = ["!@#$%^&*()_+"];
  
  for (i = 0; i < 8; i++) {
    var upper = Math.floor(Math.random() * 26);

  }

  
  passwordText.value = password;
  return "password"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
