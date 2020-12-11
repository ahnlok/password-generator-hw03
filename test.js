var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//Static variable
var upperC = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerC = ["abcdefghijklmnopqrstuvwxyz"];
var number = ["1234567890"];
var symbol = ["!@#$%^&*()_+"];

var allChar = "";

passwordText.value = password;
      
//Function for generating password
function generatePassword(){
    // var passwordGen = [];

    var upperCase = confirm("Include uppercase letter?");
    var lowerCase = confirm("Include lowercase letter?");
    var numberCase = confirm("Include number?");
    var symbolCase = confirm("Include symbol?");

    var pwdLength = parseInt(prompt("How many characters would you like to have between 8 to 128?"));

    while(pwdLength < 8 || pwdLength > 128){
        choseLengthCorrectly();
    //     alert("Try to pick length between 8 to 128!");
    }
    // else{
    //     if(confirm("Include uppercase letter?")){
    //         passwordGen.push(upperC);
    //     }
    //     if(confirm("Include lowercase letter?")){
    //         passwordGen.push(lowerC);
    //     }
    //     if(confirm("Include number?")){
    //         passwordGen.push(number);
    //     }
    //     if(confirm("Include symbol?")){
    //         passwordGen.push(symbol);
    //     }
        if(upperCase){
            allChar.concat(upperC);
        }
        if(lowerCase){
            allChar.concat(lowerC);
            //console.log("lowercase used");
        } 
        if(numberCase){
            allChar.concat(number);
            //console.log("number used");
        } 
        if(symbolCase){
            allChar.concat(symbol);
            //console.log("symbol used");
        }   
        if(!upperC && !lowerC && !number && !symbol){
            alert("Must use at least one of the choices");
            return;
        }
        var password = "";
        for (var i =0; i < pwdLength; i++) {
            password +- allChar[Math.floor(Math.random() * allChar.length)];
            // var random = Math.floor(Math.random() * passwordGen.length);
            // password = password + passwordGen[random];
        }
        passBox.textContent = password;  
}
generatePassword();
generateBtn.addEventListener("click", generatePassword);
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);