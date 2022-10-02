// Assignment Code
var generateBtn = document.querySelector("#generate");
var password ="";

  //get password Length from user -- Loop until in correct range


  function getPasswordLength () {
    var passwordLength = prompt("Password Lenght:", "between 8 and 128 Characters");
    while( (isNaN(passwordLength)) || (passwordLength < 8 || passwordLength > 128)) {
      var passwordLength =  prompt("Password Lenght must be a NUMBER between 8 and 128, enter a new value", "A NUMBER between 8 and 128");
    }
    console.log("Password Length: ", passwordLength);
    return passwordLength;
  }

  // ask user if we should include numbers in the password text
  function getIncludeNumbers () {
    
    var numberChar = "Include Numbers?"
      if (confirm(numberChar) == true) {
        var isNumberChar = true;
      } else {
        var isNumberChar = false;
      }
      console.log("Is Number Selected ", isNumberChar);
    return isNumberChar;
  }


  // ask user if we should include lower case letters in the password text
  function getIncludeLoweCase() {
    var lowerCase = "Include Lower Case characters?"
      if (confirm(lowerCase) == true) {
        var isLowerCase = true;
      } else {
        var isLowerCase = false;
      }
      console.log("Is Lower Case Selected ", isLowerCase);
    return isLowerCase;
  }

// ask user if we should include upper case letters in the password text
  function getIncludeUpperCase (){
    var upperCase = "Include upper Case characters?"
      if (confirm(upperCase) == true) {
        var isUpperCase = true;
      } else {
        var isUpperCase = false;
      }
      console.log("Is Upper Case Selected ", isUpperCase);
    return isUpperCase;
  }

  function getIncludeSpecialChars(){
    var specialChar = "Include Special characters?"
      if (confirm(specialChar) == true) {
        var isSpcialChar = true;
      } else {
        var isSpcialChar = false;
      }
      console.log("Is Special Character Selected ", isSpcialChar);
    return isSpcialChar;
  }



  function createPasswordString() {

    var passwordUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var passwordLowerChars ="abcdefghijklmnopqrstuvwxyz".split('');
    var passwordNumbers = "0123456789".split('');
    var passwordSpecialChars = "!@#$%^&*()".split('');
    var isLowerCase = getIncludeLoweCase();
    var isUpperCase = getIncludeUpperCase();
    var isNumberChar = getIncludeNumbers();
    var isSpcialChar = getIncludeSpecialChars();
    var passwordChars = [];

    if (isLowerCase){
      passwordChars = passwordChars.concat(passwordLowerChars);
    }

  if (isUpperCase){
    passwordChars = passwordChars.concat(passwordUpperChars);
  }

  if (isSpcialChar){
    passwordChars = passwordChars.concat(passwordSpecialChars);
  }

  if (isNumberChar){
    passwordChars = passwordChars.concat(passwordNumbers);
  }

  console.log("Password Text ", passwordChars);
  return passwordChars;
  }



function generatePassword() {
  var passwordLength = getPasswordLength();
var passwordChars = createPasswordString();

  for ( var i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordChars.length); //Get a random number between 0 and number of characters in the passwordChars var
    password += passwordChars[randomNumber]; // Assign and concat passwor char
 }

 return password
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);