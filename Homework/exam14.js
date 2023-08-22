function frequencySort(str) {
    const charFrequency = {};
    
    for (const char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    
    const sortedChars = str.split('').sort((a, b) => {
        if (charFrequency[b] !== charFrequency[a]) {
            return charFrequency[b] - charFrequency[a];
        }
        return str.indexOf(a) - str.indexOf(b);
    });
    
    return sortedChars.join('');
}

console.log(frequencySort('tree'));   // eert
console.log(frequencySort('cccaaa')); // aaaccc
console.log(frequencySort('Aabb'));   // bbAa
