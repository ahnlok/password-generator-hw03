var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
}
//Function for generating password
function generatePassword(){
    //Static variable
    var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
    //Global variable
    var allChar = [];

    var length = pareInt(prompt("How many characters would you like to have between 8 to 128?"));
        if (length < 8 || length > 128 ||){
            alert("Your passwords must have length of 8 to 128 letters!");
            return;
        }
        if(length !== typeof number){
            alert("Try again typing letters between 8 to 128!");
            return;
        }
        
    var upperCase = confirm("Include uppercase letters?");
    var lowerCase = confirm("Include lowercase letters?");
    var numberCase = confirm("Include numbers?");
    var symbolCase = confirm("Include symbols?");
        if(upperCase === true){
            (allChar.push(upperC));
        }
        if(upperCase === true){
            (allChar.push(lowerC));
        } 
        if(upperCase === true){
            (allChar.push(number));
        } 
        if(upperCase === true){
            (allChar.push(symbol));
        }
    return "temporary password";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);