
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength = 0
var minSelection = 0;

// Array of special characters
var special = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters
var lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters 
var uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var characterOptions = [lowercase, uppercase, numeric, special];
var characterList = ["lowercase", "uppercase", "numeric", "special"]
var charactersSelected = [];
var password = " "

// Prompting user to enter valid password length until such time as a valid entry is made
function passwordOptions(){
  clearVariables();
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a number between 8 and 128 to select the length of your password.");
  };
  selectCharacterOptions();
}

// Prompting user to select characters for password until such time as min one selection is made
function selectCharacterOptions() {
  while (minSelection === 0) {
    alert("Please select a minimum of 1 of the following character types to be included in your password");
    for (var i = 0; i < characterList.length; i++) {
      var typeCharacter = (characterList[i]);
      var selectionConfirmed = confirm("Would you like to include " + typeCharacter + " characters in your password?");
      // Creating array of selected characters
      if (selectionConfirmed) {
        charactersSelected = charactersSelected.concat(characterOptions[i]);
        minSelection++;
      }
    };
    generatePassword();
  }
}

// Generating random selection of characters from the selected characters array until the password length is met
function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    var newCharacter = Math.floor(Math.random() * (charactersSelected.length));
    password = password + charactersSelected[newCharacter];
  };
  writePassword();
}

// Write password to the #password input
function writePassword() {
    passwordText.value = password;
}

// Clear variables so new password with new parimeters can be generated 
function clearVariables(){
  passwordLength = 0;
  minSelection = 0;
  charactersSelected = [];
  password = " "
}

generateBtn.addEventListener("click", passwordOptions);
