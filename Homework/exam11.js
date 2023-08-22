function digitalClock(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    hours = 0 ? hours >= 24 : hours;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(digitalClock(5012)); // Output: "01:23:32"
console.log(digitalClock(61201)); // Output: "17:00:01"
console.log(digitalClock(87000)); // Output: "00:10:00"

