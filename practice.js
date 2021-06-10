// const kilometerToMeter = (kl)=>{
//     const keloMiter = kl*1000;
//     return keloMiter
// }
// const result = kilometerToMeter(10);
// console.log(result);

// budgetToCalculator


// // megaFriend
// const names = ['Fahmida', 'Habib', 'Najmul', 'abidur', 'Shakibul Hasan'];
// let lgth = 0;
// for (let i = 0; i <= names.length; i++) {
//     const longest = names[i]
    
// }
// // Finding longest string in array
// const num = ['1','2','th']
// console.log(largest);
// const max1 = Math.max(...num)
// console.log(max1);


// //max in an array
// var nums = ['4', '7', '1', '34', '56', '112', '65', '43'];
// var largest = nums[0];

// for(var i = 0; i < nums.length; i++){
//     var element = nums[i];
//     if(element > largest){
//         largest = element;
//     }
// }
// console.log("largest is", largest);


function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(e) {
      if(e.length > longestWord.length) {
        longestWord = e;
      }
    });
  
    return longestWord;
  }
  
  var word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
  console.log(word);