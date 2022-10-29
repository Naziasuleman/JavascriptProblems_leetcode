/**Given an integer num, return the number of steps to reduce it to zero. In one step, 
 * if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it. */

var numberOfSteps = function (num) {
  let step = 0;
  //continue till the num is not equal to zero
  while (num != 0) {
    //if the num is even; divide the number by 2 and update the num
    if (num % 2 == 0) num /= 2;
    //odd, subtract 1
    else num--;

    //increment the step count
    step++;
  }
  return step;
};



//******Another Approach using bit manipulation***********/ 
var numberOfSteps = function (num) {
  let step = 0;
  while (num) {
    //if the num%2: not equal to zero; subtract 1
    //else num >> 1 : which means num/2
    num % 2 ? --num : (num >>= 1);
    
    step++;
  }
  return step;
};