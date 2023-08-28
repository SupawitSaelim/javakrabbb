const divider = (num) => {
    const half = Math.floor(num / 2);
    return [half, num - half];
  }
  
  console.log(divider(7)); // Output: [4, 3]
  console.log(divider(4)); // Output: [2, 2]
  console.log(divider(10)); // Output: [5, 5]
  