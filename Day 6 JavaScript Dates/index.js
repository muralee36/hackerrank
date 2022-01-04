function getDayName(dateString) {
    let dayName;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var day = new Date(dateString).getDay()
    dayName = days[day];
    return dayName;
}