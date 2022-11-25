// find the count of vowels in a string
// list them
// unique vowels elements
function Finder(str) {
  let vowels = str.toLowerCase().match(/[aeiou]/gi); //output: [a, a, e]
  // filter method to finding unique elements
  var newArray = vowels.filter(
    (value, index, self) => self.indexOf(value) === index
  ); //:[a, e]
  console.log(newArray.length); //count of array
  return;
}
Finder("Alphabets");
Finder(" heheheh,,yio ");
//
//
//
//
//
// Another method
function Finder(str) {
  let string1 = str.toLowerCase().replace(/\s/g, "").split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let d = string1.length;
  for (let i in string1) {
    for (let j in vowels) {
      if (string1[i] === vowels[j]) {
        string1.splice(i, 1); // removing the elements equal to vowel
        str = string1.length;
      }
    }
  }
  console.log(d - str);
  return;
}
Finder("Alphabets");
Finder(" heheheh,,yio ");

//
//
//
//
// another method
function Finder(str) {
  let vowels = str.toLowerCase().match(/[aeiou]/gi); //output: [a, a, e]
  console.log(new Set(vowels)); //:[a, e]
  return;
}
Finder("Alphabets");
Finder(" heheheh,,yio ");
