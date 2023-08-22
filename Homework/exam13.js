function canMove(piece, fromPosition, toPosition) {
    const fromCol = fromPosition[0].charCodeAt(0) - 'A'.charCodeAt(0);
    const fromRow = parseInt(fromPosition[1]);

    const toCol = toPosition[0].charCodeAt(0) - 'A'.charCodeAt(0);
    const toRow = parseInt(toPosition[1]);

    const colDiff = Math.abs(toCol - fromCol);
    const rowDiff = Math.abs(toRow - fromRow);

    switch (piece) {
        case 'Rook':
            return fromCol === toCol || fromRow === toRow;
        case 'Bishop':
            return colDiff === rowDiff;
        case 'Queen':
            return fromCol === toCol || fromRow === toRow || colDiff === rowDiff;
        default:
            return false; // Handle unknown piece types
    }
}

console.log(canMove('Rook', 'A8', 'H8')); // true
console.log(canMove('Bishop', 'A7', 'G1')); // true
console.log(canMove('Queen', 'C4', 'D6')); // true
