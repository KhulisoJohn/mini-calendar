document.addEventListener("DOMContentLoaded", () => {
    const monthName = document.getElementById("month-name");
    const dayName = document.getElementById("day-name");
    const dayNumber = document.getElementById("daynumber");
    const year = document.getElementById("year");

    if (monthName && dayName && dayNumber && year) {
        const date = new Date();
        
        monthName.innerText = date.toLocaleString("en", { month: "long" });
        dayName.innerText = date.toLocaleString("en", { weekday: "long" });
        dayNumber.innerText = date.getDate();
        year.innerText = date.getFullYear();
    } else {
        console.error("One or more elements are missing in the DOM.");
    }
});