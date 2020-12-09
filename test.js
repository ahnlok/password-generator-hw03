var generateBtn = document.querySelector("#generate");
//Static Variables
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
//Function for password length
var charLength = prompt ("Choose length of your passwords between 8 and 128.");
    if(charLength < 8 || charLength > 128){
        alert("You must choose character length in between 8 to 128!");
    }
//Function for password variation
var upperC1 = confirm ("Do you want to have uppercase letters in your password?");
var lowerC1 = confirm ("Do you want to have lowercase letters in your password?");
var number1 = confirm ("Do you want to have numbers in your password?");
var symbol1 = confirm ("Do you want to have symbols in your password?");
    if(upperC1 === true){
    }
    if(lowerC1 === true){
    }
    if(number1 === true){
    }
    if(symbol1 === true){
    }
function writePassword(){
    var password = generatePassword();
    if(charLength < 8 || charLength > 128){
        alert("You must choose character length in between 8 to 128!");
    }
}