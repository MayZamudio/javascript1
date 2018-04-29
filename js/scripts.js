function squareCalculator(number) {
  return number ** 2;
};

function askUser(prompt_text) {//FUNCTION DEFINITION
  let number = parseInt(prompt(prompt_text, ''));//
  //alert(!isNaN(number));
  if(!isNaN(number)) { //if the number they gave us IS a number...
    alert(squareCalculator(number));//FUNCTION IS CALLED IF IT IS A NUMBER
  } else {
    let alt_text = "Come on! Give me a digit!";//DEFINING A VARIABLE
    askUser(alt_text);//FUNCTION IS CALLED IF ITS NOT A NUMBER
  };
};

let text = "Give me a number... so I can return the square of that number";
askUser(text);

//capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
let name = prompt("What is your name? Don't forget to open your console...");

function firstLetterCapital(string){
  let firstLetter = string.charAt(0);
  let uppercaseFirstLetter = string.charAt(0).toUpperCase();
  let stringWithoutFirstLetter = string.slice(1);
  let result = uppercaseFirstLetter + stringWithoutFirstLetter;
  if(string[string.length - 1] != '.') {
    result += ".";
  }
  return result;
};

let tm = firstLetterCapital(name);
console.log(tm);

//Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
//get the lenght of the string, divide by 2 and store somewhere
let flipTest = Math.ceil((tm.length -1)/2);
console.log(flipTest);
let subTest = tm.substring(flipTest);
let firsthalf = tm.substring(0, flipTest);
console.log(subTest + firsthalf);

//BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.

let userAnswer = prompt("Let's Check your pal·in·drome... a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.");
function reverseString(userAnswer) {
    // Step 1. Use the split() method to return a new array
    var splitString = userAnswer.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString(userAnswer);
console.log(reverseString(userAnswer));

if(userAnswer === reverseString(userAnswer)){
  alert("Yay! It is a palindrome!");
}else {
  alert("Nope, try again...");
//  let userAnswer = prompt("Let's Check your palindrome eg: race car");
};

