//count words dup
function countOccurrences(sentence, word) {
    const words = sentence.split(' ');
    let count = 0;
    for (const w of words) {
        const cleanWord = w.toLowerCase().replace(/[.,]/g, ''); // ลบอักขระพิเศษ
        if (cleanWord === word.toLowerCase()) {
            count++;
        }
    }
    return count;
}
const inputSentence = "The cat jumped over the wall. The wall was tall.";
const targetWord = "the";
console.log(countOccurrences(inputSentence, targetWord));  // ควรแสดงผลเป็น 2
