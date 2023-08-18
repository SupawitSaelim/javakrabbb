const string1 = ["flower", "flow", "flood"];
const string2 = ["racecar", "rare"];
const string3 = ["computer", "computing", "compute", "computation"];

function longestCommonPrefix(strings) {
    if (strings.length === 0) return '';
  
    let prefix = strings[0];
  
    for (let i = 1; i < strings.length; i++) {
      while (strings[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, prefix.length - 1);
      }
    }
  
    return prefix;
  }
  
  console.log(`Longest Common Prefix of :${string1.join(',')} are: [${longestCommonPrefix(string1)}]`);
  console.log(`Longest Common Prefix of :${string2.join(',')} are: [${longestCommonPrefix(string2)}]`);
  console.log(`Longest Common Prefix of :${string3.join(',')} are: [${longestCommonPrefix(string3)}]`);