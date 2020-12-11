
var generateBtn = document.querySelector("#generate");


var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

var allChar = [];

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
}

//Function for generating password
function generatePassword(){

    var pwdLength = prompt("How many characters would you like to have between 8 to 128?");
        if(pwdLength < 8 || pwdLength > 128){
            alert("Try to pick length between 8 to 128!");     
        }

    var upperCase = confirm("Include uppercase letter?");
    var lowerCase = confirm("Include lowercase letter?");
    var numberCase = confirm("Include number?");
    var symbolCase = confirm("Include symbol?");
        if(upperCase === true){
            allChar.push(upperC);
        }
        if(lowerCase === true){
            allChar.push(lowerC);
        }
        if(numberCase === true){
            allChar.push(number);
        }
        if(symbolCase === true){
            allChar.push(symbol);
        }
    // if(allChar.length < 1 || allChar == undefined){
    //     alert("Pick at least one of the criteria");
    // }
    // console.log(allChar);  
    
    for (var i = 0; i < pwdLength; i++) {
       var randomArray = Math.floor(Math.random() * allChar.length);
       var result = Math.floor(Math.random() * allChar[randomArray].length);
        if( i === 0){
            password =+ allChar[randomArray][result];
        } 
        else{
            password = password + allChar[randomArray][result];
        }
            
    }
    return password;
}
// generatePassword();
// document.querySelector("#password").value = allChar;
// generateBtn.addEventListener("click", generatePassword);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);