// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*()/?-_|';
  var userSelection = [];
  var passwordLength = parseInt( prompt('enter passwordLength'));
  if  (passwordLength < 8 || passwordLength > 30) {
    return 'Invalid password length!';
  }
  else {
    var userChoicesUpper = confirm('Do you want upper case letters?');
    var userChoicesLower = confirm('Do you want lower case letters?');
    var userChoicesNumbers = confirm('Do you want numbers letters?');
    var userChoicesSymbols = confirm('Do you want symbols letters?');
    if (!userChoicesUpper && !userChoicesLower && !userChoicesNumbers && !userChoicesSymbols) {
      return 'Choose an option.';
    } else {
      if (userChoicesUpper) {
        userSelection += upperCaseLetters
      }
      if (userChoicesLower) {
        userSelection += lowerCaseLetters
      }
      if (userChoicesNumbers) {
        userSelection += numbers
      }
      if (userChoicesSymbols) {
        userSelection += symbols
      }
      console.log(userSelection)
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
