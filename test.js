var generateBtn = document.querySelector("#generate");
var password = generatePassword();
var passwordText = document.querySelector("#password");

//Static variable
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
//Global variable
var allChar = [];

do{
    length = prompt("How many characters would you like to have between 8 to 128?");
}
    while(length < 8 || length > 128);

function generatePassword() {
    var password = ""
    
    if(confirm("Include uppercase letters?")){
        allChar.push(upperC);
    }
    if(confirm("Include lowercase letters?")){
        allChar.push(lowerC);
    }
    if(confirm("Include number letters?")){
        allChar.push(number);
    }
    if(confirm("Include symbol letters?")){
        allChar.push(symbol);
    }
    for(var i = 0; i < length; i++){
        var final = Math.floor(Math.random() * lowerC.length)
        password = password + lowerC[final];
        }
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);