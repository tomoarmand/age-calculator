document.getElementById("calculate").addEventListener("click", function() {

    let birthDay = parseInt(document.getElementById("dayfield").value);
    let birthMonth = parseInt(document.getElementById("monthfield").value);
    let birthYear = parseInt(document.getElementById("yearfield").value);
    
    let isValid = true;
    
    if (isNaN(birthDay) || document.getElementById("dayfield").value === "") {
        isValid = false;
    }
    if (isNaN(birthMonth) || document.getElementById("monthfield").value === "") {
        isValid = false;
    }
    if (isNaN(birthYear) || document.getElementById("yearfield").value === "") {
        isValid = false;
    }
    if (birthDay < 1 || birthDay > 31) {
        isValid = false;
    }
    if (birthMonth < 1 || birthMonth > 12) {
        isValid = false;
    }
    
    
    let testDate = new Date(birthYear, birthMonth - 1, birthDay);
    if (testDate.getFullYear() !== birthYear || 
        testDate.getMonth() !== birthMonth - 1 || 
        testDate.getDate() !== birthDay) {
        isValid = false;
    }
    
    
    let today = new Date();
    
    if (testDate > today) {
        isValid = false;
    }
    
    if (isValid) {
        // Get current date
        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth() + 1;
        let currentDay = today.getDate();
        
        // Calculate age
        let years = currentYear - birthYear;
        let months = currentMonth - birthMonth;
        let days = currentDay - birthDay;
        
        // Adjust years if current date is before birthdate in the year
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }
        
        // Adjust months and days if current day is before birth day
        if (days < 0) {
            // Get days in the previous month
            const previousMonthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
            days += previousMonthDays;
            months--;
        }
        
        // Handle case where adjusted months became negative
        if (months < 0) {
            months += 12;
            years--;
        }
        
    
        document.getElementById("yeardash").textContent = years;
        document.getElementById("monthdash").textContent = months;
        document.getElementById("daydash").textContent = days;
    } else {
        console.log("Invalid date input");
    }
});

