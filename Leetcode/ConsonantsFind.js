// consonants in a string
//replace(/\s/g, '') - replacing all the special characters and spaces to null string
function Finder(str) {
  let string1 = str.toLowerCase().replace(/\s/g, "").split("");
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i in string1) {
    for (let j in vowels) {
      if (string1[i] === vowels[j]) {
        string1.splice(i, 1);
        str = string1.length;
      }
    }
  }
  console.log(str);
  return;
}
Finder("Alphabets");
Finder(" Hello world ");
