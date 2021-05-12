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
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
