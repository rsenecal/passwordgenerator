// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
 var passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
 var passwordLength = 10;
 var password ="";
 for ( var i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordChars.length); //Get a random number between 0 and number of characters in the passwordChars var
    password += passwordChars.substring(randomNumber, randomNumber+1); // Assign and concat passwor char
 }


  // var password = "2345658";
 return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

