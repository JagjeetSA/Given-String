/*
To check whether particular word/number present in sentence or not using inbuilt function

String - Hello my name is Ankit
Test Case - "funny"
Output - False

String - Hello my name is Ankit
Test Case - "ankit"
Output - false       */

const str = "Hello my name is Ankit";
const lookup = "ankit"

//converting string to array and diving elements on basis of space

const Arr = [];
let Word = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
    Arr.push(Word);
    Word = '';
  } else {
    Word += str[i];
  }
}

if (Word !== '') {
  Arr.push(Word);
}

//console.log(Arr);
// looping over Arr and checking if the given string(word) is present or not
let found = false; // Initialize a variable to keep track of whether the lookup was found

for (let i=0; i<Arr.length; i++){
    if(Arr[i].toLowerCase() === lookup.toLowerCase()){
        found = true; // Set the variable to true if the lookup is found
        break;
    }
}

if (found) { // Check the variable to determine whether the lookup was found or not
    console.log(true)
} else {
    console.log(false)
}
