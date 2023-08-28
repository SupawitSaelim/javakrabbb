//date and time 
const now = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayOfWeek = daysOfWeek[now.getDay()];
const time12hr = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

console.log(`Today is: ${dayOfWeek}.`);
console.log(`Current time is: ${time12hr}`);
