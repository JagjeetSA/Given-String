/*
To check whether particular word/number present in sentence or not using inbuilt function

String - Hello my name is Ankit
Test Case - "funny"
Output - False

String - Hello my name is Ankit
Test Case - "ankit"
Output - false       */

const str = "Hello my name is Ankit";

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

console.log(Arr);