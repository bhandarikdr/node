function getDayName(dateString) {
    let date = new Date(dateString);
    let dayName;
    //let key = date.getDay();
    //console.log(key);
    switch(date.getDay()){
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "It's horible";
    }
    
    return dayName;
}

console.log(getDayName("10/11/2009"));