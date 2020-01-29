function twoNumberSum(array, targetSum) {
    // Write your code here.
      for (i=0;i<array.length;i++){
          console.log(array[i]);
          if (i[0] + i[1] == targetSum){
              return true
          }
      }
      return false; 
  }
let array = [3,5,-4,8,11,1,-1,6];
let targetSum = 0;
console.log(twoNumberSum(array, targetSum));
  