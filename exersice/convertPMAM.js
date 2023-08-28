//convert PM:AM
function convertTo24HourFormat(time) {
    const [hour, minute, period] = time.split(/[: ]/);
    let hour24 = parseInt(hour, 10);
    
    if (period === 'PM' && hour24 !== 12) {
        hour24 += 12;
    } else if (period === 'AM' && hour24 === 12) {
        hour24 = 0;
    }
    
    return `${hour24.toString().padStart(2, '0')}:${minute}`;
}

console.log(convertTo24HourFormat("04:30 AM"));  // ควรแสดงผลเป็น "14:30"
