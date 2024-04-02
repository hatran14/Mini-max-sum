const inputNumbers = [999999, 1, 0, -1, 1000];
/*
* Testcase 1: [3, 1, 3, 1, 5]. Output: 8 12
* Testcase 2: [1, 1, 1, 1, 1]. Output: 4 4
* Testcase 3: [1, 2, 3, 5, 4]. Output: 10 14
* Testcase 4: [3, 1, 5, 7, 9]. Output: 16 24
* Testcase 5: [999999, 1, 0, -1, 1000]. Output: 
*/

/*
 * Calculate minimum sum of 4 greatest element
 * Complexity: O(n)
*/
function sumOfGreatest(arr) {
  let min = 0; // min variable
  return arr.reduce((sum, curr, index) => {
    if (index === 0) {
      min = curr;
      return 0;
    }
    
    if (min > curr) {
      sum += min;
      min = curr;
    } else {
      // min <= curr
      sum += curr;
    }
    
    return sum;
  }, 0);
}

/*
 * Calculate minimum sum of 4 smallest element
 * Complexity: O(n)
*/
function sumOfSmallest(arr) {
  let max = 0; // max variable
  return arr.reduce((sum, curr, index) => {
    if (index === 0) {
      max = curr;
      return 0;
    }
    
    if (max < curr) {
      sum += max;
      max = curr;
    } else {
      // max >= curr
      sum += curr;
    }
    
    return sum;
  }, 0);
}


const maxSum = sumOfGreatest(inputNumbers);
const miniSum = sumOfSmallest(inputNumbers);

console.log(miniSum, maxSum);