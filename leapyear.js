//Takes in a User-supplied year and determines if it is a leap year

var year = prompt("Please enter a year to determine whether it is a leap year");

var divFour = function(year) {
    return year % 4;
}

if (divFour(year) === 0 && year % 1000 != 0) {
    
    alert(year + " is a leap year");

}
else if (divFour(year) === 0 && year % 1000 === 0 && year % 400 === 0) {
     alert(year + " is a leap year");
}
else {
     alert(year + " is not a leap year");
}