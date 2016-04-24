var selectElementsStartingWithA = function(array) {
  return array.filter(function(item) {
    return item.match(/^A/i);
  });
};

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(item) {
    return item.match(/^[aeiou]/i);
  });
};

var removeNullElements = function(array) {
  return array.filter(function(item) {
    return item !== null;
  });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(item) {
    return item !== null && item !== false;
  });
};

var reverseWordsInArray = function(array) {
  for(var i = 0; i < array.length; i++){
    array[i] = array[i].split("").reverse().join("");
  }
  return array;
};

var everyPossiblePair = function(array) {
  // pairs = [];
  // for (var i=0; i<array.length; i++) {
  //   for (var j=(array.length-1); j>=0; j--) {
  //     if (i !== j) {
  //       pairs.push([array[i],array[j]]);
  //     }
  //   }
  // }
  // return pairs.sort();
};

var allElementsExceptFirstThree = function(array) {
  return array.filter(function(item) {
    if (array.indexOf(item) >= 3) {
      return item;
    }
  });
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  reverseWordsInArray(array).sort();
  return reverseWordsInArray(array);
};

var getFirstHalf = function(string) {
  var length = string.length;
  if (!_numIsEven(string.length)) {
    length = string.length+1;
  }
  return string.substr(0,(length/2));
};

var makeNegative = function(number) {
  return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
  return array.filter(function(str) {
    return str == str.split('').reverse().join('');
  }).length;
};

var shortestWord = function(array) {
  return array.reduce(function (a, b) {
    return a.length < b.length ? a : b;
  });
};

var longestWord = function(array) {
  return array.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
};

var sumNumbers = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
};

var repeatElements = function(array) {
  return array.concat(array);
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  return sumNumbers(array)/array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  // return array.filter(function(item) {
  //   if (item > 5) { break; }
  //   return item;
  // });
};

var convertArrayToObject = function(array) {
  var object = {};
  for(var i = 0; i < array.length; i++){
    if (_numIsEven(i)) { object[array[i]] = array[i+1]; }
  }
  return object;
};

var getAllLetters = function(array) {
  // return array.map(function(string){
  //   string.split('');
  // });
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  return 'Write your method here';
};

var roundUp = function(number) {
  return 'Write your method here';
};

var formatDateNicely = function(date) {
  return 'Write your method here';
};

var getDomainName = function(string) {
  return 'Write your method here';
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
};

var squareRoot = function(number) {
  return 'Write your method here';
};

var factorial = function(number) {
  return 'Write your method here';
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return 'Write your method here';
};

var letterPosition = function(array) {
  return 'Write your method here';
};

var _numIsEven = function(num) {
  return num % 2 === 0;
};
