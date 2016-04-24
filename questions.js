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
  // console.log(pairs);
  // for (var k=0; k<array.length; k++) {
  //   pairs[k].sort();
  // }
  // console.log(pairs);
  // return pairs.sort()._onlyUnique();
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
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i].split(''));
  }
  return _flattenArray(arr).sort()._onlyUnique();
};

var swapKeysAndValues = function(object) {
  var result = {};
  for (var key in object) {
    result[object[key]] = key;
  }
  return result;
};

var sumKeysAndValues = function(object) {
  // console.log(object);
  // var sum = 0;
  // for (var key in object) {
  //   sum += key;
  //   sum += object[key];
  // }
  // return sum;
};

var removeCapitals = function(string) {
  return 'Write your method here';
};

var roundUp = function(number) {
  return Math.ceil(number);
};

var formatDateNicely = function(date) {
  return 'Write your method here';
};

var getDomainName = function(string) {
  // return string.match(/(?<=@)(.*)/);
};

var titleize = function(string) {

};

var checkForSpecialCharacters = function(string) {

};

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  function _calcFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * _calcFactorial(n - 1);
}

return _calcFactorial(number);

};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return Math.round((number-32)*(5/9));
};

var letterPosition = function(array) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return 'Write your method here';
};

var _numIsEven = function(num) {
  return num % 2 === 0;
};

var _flattenArray = function(array) {
  return array.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};

Array.prototype._onlyUnique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
};
