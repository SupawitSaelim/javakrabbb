function sortStringByLength(inputString) {
    const words = inputString.split(' ');
    
    words.sort((a, b) => {
      if (a.length <= 2 && b.length <= 2) {
        return a.localeCompare(b);
      } else {
        return a.length - b.length;
      }
    });
  
    return words.join(' ');
  }
  
  console.log(sortStringByLength("apple banana cherry date")); // "date apple banana cherry"
  console.log(sortStringByLength("cat dog elephant")); // "cat dog elephant"
  console.log(sortStringByLength("a an at")); // "a an at"
  
  