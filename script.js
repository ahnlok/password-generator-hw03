
var generateBtn = document.querySelector("#generate");
//Static variables
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

// Function to choose th password length
function passwordCreation() {
    
  var charList = [];
  var completePwd = "";
  
  var charLength = prompt("How many characters would you like to have between 8 to 128?");

  if(charLength < 8 || charLength > 128){
      alert("You have to choose password length between 8 and 128 long"); 
  }
  else{
    if(confirm("Include uppercase letters?")){
      Array.pwd.push.apply(charList, upperC);
    }
    if(confirm("Include lowercase letters?")){
      Array.pwd.push.apply(charList, upperC);
    }
    if(confirm("Include nummbers?")){
      Array.pwd.push.apply(charList, number);
    }
    if(confirm("Include symobls?")){
      Array.pwd.push.apply(charList, number);
    }
    else{ //for loop to check charLength is generating appropriately
      for(var i=0; i<charLength; i++){
        var random = Math.floor(Math.random() * charList.length);
        completePwd += charList[random];
      }
    }
    }
      document.getElementById("password").innerHTML = resultPass;
  }
//Add copy to clipboard for user.
function copyToClipboard(){
  document.querySelector("display").select();
  document.execCommand("Copy");
  alert("Password copied to your clipboard");
}
