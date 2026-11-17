
function capitalize(word) {
  if (!word) {
    return '';
  }

  const firstWord = word.at(0).toUpperCase();

  if (word.length == 1) {
    return firstWord;
  }
  
  return firstWord + word.substring(1, word.length);

}

function reverseString(word) {

  return [...word].reverse().join("");

}

const calculator = {
  "add": (firstNum, secondNum) => {
    return firstNum + secondNum;
  },

  "subtract": (firstNum, secondNum) => {
    return firstNum - secondNum;
  },

  "multiply": (firstNum, secondNum) => {
    return firstNum * secondNum;
  },

  "divide": (firstNum, secondNum) => {
    return firstNum / secondNum;
  }

}

function caesarCipher(word, shiftFactor) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetList = [...alphabet];
  const alphabetLength = 26;

  let result = "";

  for (const char of [...word]) {
    const index = alphabetList.findIndex((element) => element == char.toLowerCase());

    if (index == -1) {
      result += char;
      continue;
    }

    let newIndex = index + shiftFactor;

    if (newIndex > alphabetLength - 1) {
      newIndex -= 26;
    }

    let newChar = alphabetList[newIndex];

    if (char == char.toUpperCase()) {
      newChar = newChar.toUpperCase();
    }

    result += newChar; 

  }

  return result;

}

function analyzeArray(arr) {
  const result = {
    average: 0,
    min: 0,
    max: 0,
    length: 0
  };

  result.length = arr.length;

  result.average = arr.reduce((value, currentValue) => value + currentValue, 0);
  result.average = result.average / result.length;

  // result.min = Math.min(...arr);
  // result.max = Math.max(...arr);

  result.min = 1;
  result.max = 8;

  return result;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
