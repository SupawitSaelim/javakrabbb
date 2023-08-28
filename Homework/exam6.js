function totalVolume(...boxes) {
    let total = 0;

    for (const box of boxes) {
        if (box.length !== 3) {
            console.log("Invalid box dimensions:", box);
            continue;
        }
        
        const [length, width, height] = box;
        const volume = length * width * height;
        total += volume;
    }

    return total;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // Output: 63




