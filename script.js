// Assignment Code
var generateBtn = document.querySelector("#generate");
// document.getElementById("generate").disabled = true;

  //get password Length from user -- Loop until in correct range

  function getPasswordCriterias() {

        var passwordLength = prompt("Password Lenght:", "between 8 and 128 Characters");
        while (passwordLength < 8 || passwordLength > 128) {
          var passwordLength =  prompt("Password Lenght MUST be between 8 and 128 plaese enter a new value", "between 8 and 128 Characters");
        };

        //Get boolean values from user
        var numberChar = "Include Numbers?"
        if (confirm(numberChar) == true) {
          var isNumberChar = true;
        } else {
          var isNumberChar = false;
        }

        var lowerCase = "Include Lower Case characters?"
        if (confirm(lowerCase) == true) {
          var isLowerCase = true;
        } else {
          var isLowerCase = false;
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
        return [passwordLength, isLowerCase, isUpperCase, isSpcialChar, isNumberChar]
  }



// Code below to generate  and return password

function generatePassword() { 
  // get user input and assign it to a value 
  //**STARTS** Pull out into a function later

  // var passwordChars = ""; // Initialize variable to empty
  // Define Variables to contain different bucket of password characters
  
  var passwordUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLowerChars ="abcdefghijklmnopqrstuvwxyz";
  var passwordNumbers = "0123456789";
  var passwordSpecialChars = "!@#$%^&*()";

  var userData = getPasswordCriterias(); //Assign values from getPasswordCriterias to var userData
  var passwordLength = userData[0];
  var isLowerCase = userData[1];
    if (isLowerCase){
      var passwordChars =  passwordChars + passwordLowerChars;
    }
  var isUpperCase = userData[2];
  if (isUpperCase){
    var passwordChars = passwordChars + passwordUpperChars;
  }
  var isSpcialChar = userData[3];
  if (isSpcialChar){
    var passwordChars = passwordChars + passwordSpecialChars;
  }
  var isNumberChar = userData[4];
  if (isNumberChar){
    var passwordChars = passwordChars + passwordNumbers;
  }
  //Iterating passwordChars to select random values until password length is reached
  for ( var i=0; i < passwordLength; i++) {
    var password;
     var randomNumber = Math.floor(Math.random() * passwordChars.length); //Get a random number between 0 and number of characters in the passwordChars var
     password += passwordChars.substring(randomNumber, randomNumber+1); // Assign and concat passwor char
  }
  console.log ("Password Generated" + password);
  return password
 }
 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
