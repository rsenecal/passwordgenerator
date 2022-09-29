// Assignment Code
var generateBtn = document.querySelector("#generate");
// document.getElementById("generate").disabled = true;

// Write password to the #password input



  var passwordLength = prompt("Password Lenght:", "between 8 and 128 Characters");
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength =  prompt("Password Lenght MUST be between 8 and 128 plaese enter a new value", "between 8 and 128 Characters");
  };

  var lowerCase = "Include Lower Case characters?"
  if (confirm(lowerCase) == true) {
    var isLowerCase = true;
  } else {
    var isLowercase = false;
  }

  var upperCase = "Include upper Case characters?"
  if (confirm(upperCase) == true) {
    var isUpperCase = true;
  } else {
    var isUpperCase = false;
  }

  var specialChar = "Include Special characters?"
  if (confirm(specialChar) == true) {
    var isSpcialChar = true;
  } else {
    var isSpcialChar = false;
  }



console.log ("Value of islowercase " + isLowerCase);
console.log ("Value of isUpperCase " + isUpperCase);
console.log ("Value of special characters " + isSpcialChar);
console.log ("Value of Length of password " + passwordLength);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Code below to generate  and return password

function generatePassword() {
 var passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
 //var passwordLength = 10;
 var password ="";
 for ( var i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordChars.length); //Get a random number between 0 and number of characters in the passwordChars var
    password += passwordChars.substring(randomNumber, randomNumber+1); // Assign and concat passwor char
 }

 return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

