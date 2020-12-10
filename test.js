var generateBtn = document.querySelector("#generate");

//Static variable
var upperC = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerC = ["abcdefghijklmnopqrstuvwxyz"];
var number = ["1234567890"];
var symbol = ["!@#$%^&*()_+"];
var passwordGenValue = "";

//Function for writing password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
      
    passwordText.value = password;
      
}
//Function for generating password
function generatePassword() {
    //Used while loop to control password length choice
    var pwdLength = prompt("How many characters would you like to have between 8 to 128?");
    if(pwdLength < 8 || pwdLength > 128){
        alert("Try to pick length between 8 to 128!");
        return generatePassword()
    }
    console.log("Length of your password is " + pwdLength);

    var upperCase = confirm("Include uppercase letter?");
    if(upperCase) {
        var passwordGen = passwordGen.concat(upperC)
        console.log("uppercase used");
    }

    var lowerCase = confirm("Include lowercase letter?");
    if(lowerCase) {
        var passwordGen = passwordGen.concat(lowerC)
        console.log("lowercase used");
    } 

    var numberCase = confirm("Include number?");
    if(numberCase) {
        var passwordGen = passwordGen.concat(number)
        console.log("number used");
    } 

    var symbolCase = confirm("Include symbol?");
    if(symbolCase) {
        var passwordGen = passwordGen.concat(symbol)
        console.log("symbol used");
    }

    if(!upperCase && !lowerCase && !numberCase && !symbolCase){
        alert("Must use at least one of the choices");
        generatePassword()
    }

    var password = "";
    for (var i =0; i < pwdLength; i++){
        var random = Math.floor(Math.random() * passwordGenValue.length)
        var randomValue = passwordGenValue[random];
        password = randomValue + password;
    }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);