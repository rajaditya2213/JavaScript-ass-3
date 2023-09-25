//Create a function that takes a string as input and returns the string reversed using string manipulation techniques

const originalString=("Hello world")


function reverseString(input){
     return input.split('').reverse().join('');
}
const reversedString=reverseString(originalString);

console.log(reversedString);
