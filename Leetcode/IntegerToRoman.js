//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//Function to convert the Integer to Roman
var IntegerToRoman = function (num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let output = "";
  //looping through all the keys in map
  for (key in map) {
    //dividing the number by the map[key], storing remainder to remainder variable
    const remain = Math.floor(num / map[key]);

    //if the remain is not equal to zero, repeat the key(string) which at first time M according to the remain value
    if (remain !== 0) {
      output += key.repeat(remain);
    }

    //taking modules of number by map- present key for example: 2000/ (key= 1000), and storing the result to num
    num %= map[key];
    //if the num is now zero, return the output in Roman
    if (num === 0) return output;
  }

  return output;
};

console.log(IntegerToRoman(2000));
