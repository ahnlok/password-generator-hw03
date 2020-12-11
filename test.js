var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var allChar = [];
//Function for generating password
function generatePassword(){
    // var allChar = [];
    // var passwordGen = "";


    // var upperCase = confirm("Include uppercase letter?");
    // var lowerCase = confirm("Include lowercase letter?");
    // var numberCase = confirm("Include number?");
    // var symbolCase = confirm("Include symbol?");

    var pwdLength = prompt("How many characters would you like to have between 8 to 128?");
    if(pwdLength < 8 || pwdLength > 128){
        alert("Try to pick length between 8 to 128!");     
    }

    if(confirm("Include uppercase letters?")){
        allChar.push(upperC);
    }
    if(confirm("Include lowercase letters?")){
        allChar.push(lowerC);
                console.log("lowercase used");
    } 
    if(confirm("Include number?")){
        allChar.push(number);
                    //console.log("number used");
    } 
    if(confirm("Include symbols?")){
        allChar.push(symbol);
                    //console.log("symbol used");
    }   
    if(allChar.length < 1 || allChar == undefined){
        alert("Pick at least one of the criteria");
    }
    // console.log(allChar);  
    for (var i =0; i < pwdLength; i++) {
        var result = Math.floor(Math.random() * upperC.length);
        password = password + upperC.length[result];
    }
    return password;
}
generatePassword();
document.querySelector("#password").value = allChar;
generateBtn.addEventListener("click", generatePassword);
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);