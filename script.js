// My Project no. #6



document.addEventListener("DOMContentLoaded", () => {
    addYearOptions();
    addMonthOptions();
    addDayOptions(31); // for January (default)
});



// this function for add year options in select element
function addYearOptions () {
    // get select element from year id
    const select_el = document.getElementById("year");
    // loop for create option elements for year
    for (let year=1950; year<2025; year++) {
        // create option element
        const option_el = document.createElement("option");
        // add text
        option_el.innerText = year;
        // append it to select_el
        select_el.append(option_el);
    }
}



// this function for add month options in select element
function addMonthOptions () {
    // month list
    const month_list = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // get select element from month id
    const select_el = document.getElementById("month");
    // loop for create option elements for month
    for (let month of month_list) {
        // create option element
        const option_el = document.createElement("option");
        // add text
        option_el.innerText = month;
        // append it to select_el
        select_el.append(option_el);
    }
}



// this function for add day options in select element
function addDayOptions (max_date) {
    // get select element from date id
    const select_el = document.getElementById("date");
    // first remove all options (if possible)
    select_el.innerHTML = "";
    // loop for create option elements for date
    for (let date=1; date<=max_date; date++) {
        // create option element
        const option_el = document.createElement("option");
        // add text
        option_el.innerText = date;
        // append it to select_el
        select_el.append(option_el);
    }
}




// this function for get february date from year (28 or 29)
function getFebruaryDate(year) {
    // February has 28 days by default
    let days_in_february = 28;
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        days_in_february = 29; // Leap year has 29 days in February
    }
    // Return the last day of February for the given year
    return days_in_february;
}




// this function called when year or month select element changed
function onChangeSelect () {
    // get select element from year id
    const select_year = document.getElementById("year");
    // get select element from month id
    const select_month = document.getElementById("month");
    // get year value
    const year = select_year.value;
    // get month value
    const month = select_month.value;
    // month list for 31 days
    const month_list_31 = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];
    if (month_list_31.includes(month)) {
        addDayOptions(31);
    }else if (month === "Feb") {
        const days_in_february = getFebruaryDate(year);
        addDayOptions(days_in_february);
    }else {
        addDayOptions(30);
    }
}



// this function for get age in string formated from DOB
function getAge(year, month, day) {
    const currentDate = new Date();
    const dob = new Date(year, getMonthIndex(month), day); // Convert month string to index
    let age = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();
    // Adjust age, months, and days if necessary
    if (months < 0 || (months === 0 && days < 0)) {
        age--;
        months += 12;
    }
    if (days < 0) {
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        days = prevMonth.getDate() + days;
    }
    // Format the result as a string
    let result = `${age} years, ${months} months, and ${days} days`;
    return result;
}




// Helper function to get the index of the month string
function getMonthIndex(month) {
    const month_list  = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return month_list.indexOf(month);
}



// this function called when user clicked on button
// and show result
function calculate () {
    // get select element from year id
    const select_year = document.getElementById("year");
    // get select element from month id
    const select_month = document.getElementById("month");
    // get select element from date id
    const select_day = document.getElementById("date");
    // get year value
    const year = select_year.value;
    // get month value
    const month = select_month.value;
    // get day value
    const day = select_day.value;
    // get age and store in result variable
    const result = getAge(year, month, day);
    // get result element
    const result_el = document.getElementById("result");
    // add text
    result_el.innerText = result;
}






// Hope you liked this code.
// Please let me know in the comments so I can improve it further.













