//function to calculate the roman number to integer
var romanToInt = function (s) {
  const newmap = new Map();
  newmap.set("I", 1);
  newmap.set("V", 5);
  newmap.set("X", 10);
  newmap.set("L", 50);
  newmap.set("C", 100);
  newmap.set("D", 500);
  newmap.set("M", 1000);

  const n = s.length;
  //taking the string 2nd last value which is any roman number and find the value of that in newmap
  let newnum = newmap.get(s[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    //current num is greater than the string right number value
    if (newmap.get(s[i]) >= newmap.get(s[i + 1])) {
      //add it to newnum
      newnum += newmap.get(s[i]);
    } else {
      newnum -= newmap.get(s[i]);
    }
  }
  return newnum;
};
