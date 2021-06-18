const findSum = function(array) {
  let sum = 0; 
  for(let i=0; i < array.length; i++){
    sum += array[i]; 
  }
  return sum;
};

const findFrequency = function(array) {
  let elementHigh = 0;
  let countHigh = 0;
  let elementLow = 0;
  let countLow = array.length;

  for (let i = 0; i < array.length; i++){ //master pass
    let tempElement = array[i];
    let tempCount = 0;
    for (let j = 0; j < array.length; j++){ //individual array element comparison
      if (array[j] === tempElement)
        tempCount++;
    }    
    if (tempCount > countHigh) { //finding highest count comparison
      elementHigh = tempElement;
      countHigh = tempCount;
    }
    if (tempCount < countLow) { //finding lowest count comparison
      elementLow = tempElement;
      countLow = tempCount;
    }
  }
  return console.log("most: '" + elementHigh + "' least: '" + elementLow + "'");
};

const isPalindrome = function(str) {
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str.charAt(i) !== str.charAt(length - 1 -i)) {
      return false
    }
  }
  return true;
};

const largestPair = function(array) {
  let arr = array;
  let currentElement = 0;
  let nextElement = 0;
  let product = -Infinity;
  for (let i = 0; i - 1 < arr.length; i++) {
    currentElement = arr[i];
    nextElement = arr[i + 1];
    if (currentElement * nextElement > product) {
      product = currentElement * nextElement;
    };
  };
  return product;
};

const removeParenth = function(str) {
  str = str.replace(/ *\([^)]*\) */g, "");
  return str
};

const scoreScrabble = function(str) {
  const letterValues = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10,
  };
    let yourScore = 0;
    str = str.toLowerCase();
    for (let ch of str) {
        yourScore += letterValues[ch];
    }
    return yourScore;
};
