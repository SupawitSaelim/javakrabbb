function jumpingFrog(maxJump, terrain) {
    let currentPosition = 0;
    let jumps = 0;

    while (currentPosition < terrain.length) {
        if (terrain[currentPosition] === 0) {
            return 'no chance :-(';
        }

        currentPosition += Math.min(maxJump, terrain[currentPosition]);
        jumps++;
    }

    return jumps;
}

console.log(jumpingFrog(5, [1, 1, 1, 1, 1])); // Output: 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1])); // Output: 4
console.log(jumpingFrog(5, [1, 1, 0, 1, 1])); // Output: 'no chance :-('
