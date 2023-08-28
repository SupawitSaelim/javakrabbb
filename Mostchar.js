function findMostFrequentCharacters(sentence) {
    const cleaned = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const charFrequency = Array.from(cleaned).reduce((freq, char) => {
      freq[char] = (freq[char] || 0) + 1;
      return freq;
    }, {});
    const maxFrequency = Math.max(...Object.values(charFrequency));
    return Object.keys(charFrequency).filter(char => charFrequency[char] === maxFrequency);
  }
  
  const inputSentence = prompt("ป้อนประโยค:");
  const result = findMostFrequentCharacters(inputSentence);
  
  console.log(`ตัวอักษรที่ปรากฏมากที่สุดคือ "${result.join('", "')}"`);
  