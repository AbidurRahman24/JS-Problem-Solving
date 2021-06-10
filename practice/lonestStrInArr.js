function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = findLongestWord(["Niloy","Abidur","Sumon", "Habib", "Najmul", "Fahmida", "Najbiha", "Ruhan"]);
  console.log(word);











  /*
  var longest = (arr) => {
  let sum = 0
  arr.map((e) => {
    sum = e.length > sum ? e.length : sum
  })
  return sum
} */