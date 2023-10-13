function calculateTimeDifference() {
    const userDateTimeInput = document.getElementById("userDateTime").value;
    const userTime = new Date(userDateTimeInput);
    
    if (userTime && userTime <= new Date()) {
        const currentTime = new Date();
        const timeDiff = currentTime - userTime;
        const secondsDiff = Math.floor(timeDiff / 1000);
        const minutesDiff = Math.floor(secondsDiff / 60);
        const hoursDiff = Math.floor(minutesDiff / 60);
        const daysDiff = Math.floor(hoursDiff / 24);

        const result = `It has been ${daysDiff} days, ${hoursDiff % 24} hours, ${minutesDiff % 60} minutes, and ${secondsDiff % 60} seconds since the specified time.`;

        document.getElementById("result").textContent = result;
    } else {
        document.getElementById("result").textContent = "Invalid date/time. Please select a valid past date and time.";
    }
}
