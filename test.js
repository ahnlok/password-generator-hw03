var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//Static variable
var upperC = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerC = ["abcdefghijklmnopqrstuvwxyz"];
var number = ["1234567890"];
var symbol = ["!@#$%^&*()_+"];

var password = generatePassword();
var passwordGen = [];

passwordText.value = password;
      
//Function for generating password
function generatePassword(){
    // var upperCase = confirm("Include uppercase letter?");
    // var lowerCase = confirm("Include lowercase letter?");
    // var numberCase = confirm("Include number?");
    // var symbolCase = confirm("Include symbol?");

    var pwdLength = prompt("How many characters would you like to have between 8 to 128?");

    var password = "";
    
    if(pwdLength < 8 || pwdLength > 128){
        alert("Try to pick length between 8 to 128!");
    }
    else{
        if(confirm("Include uppercase letter?")){
            passwordGen.push(upperC);
        }
        if(confirm("Include lowercase letter?")){
            passwordGen.push(lowerC);
        }
        if(confirm("Include number?")){
            passwordGen.push(number);
        }
        if(confirm("Include symbol?")){
            passwordGen.push(symbol);
        }
        // if(lowerCase){
        //     var passwordGen = passwordGen.concat(lowerC);
        //     //console.log("lowercase used");
        // } 
        // if(numberCase){
        //     var passwordGen = passwordGen.concat(number);
        //     //console.log("number used");
        // } 
        // if(symbolCase){
        //     var passwordGen = passwordGen.concat(symbol);
        //     //console.log("symbol used");
        // }   
        // if(!upperCase && !lowerCase && !numberCase && !symbolCase){
        //     alert("Must use at least one of the choices");
        // }
    }
    for (var i =0; i < pwdLength; i++) {
        var random = Math.floor(Math.random() * passwordGen.length);
        password = password + passwordGen[random];
    }
    return password;
}
generatePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);