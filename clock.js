//Global Variables
var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var second = document.getElementById('second')

//Function for ticks
function ticker() {
    //Variables for getting date, hours, minds, seconds
    var date = new Date()                //newDate JS fancy that pulls current time
    var hours = date.getHours() % 12     //JS fancy that pulls getHours from date
    var minutes = date.getMinutes()      //getSeconds JS fancy that pulls seconds from date
    var seconds = date.getSeconds()

    //Variables for converting time to degrees
    var degreeHour = (hours * 30) + (0.5 * minutes)    // 360 / 12 = 30 degrees per hour, deg/60 = 0.5
    var degreeMinute = (minutes * 6) + (0.1 * seconds) // 360 / 60 = 6 degrees per minute, deg/60 = 0.1
    var degreeSecond = seconds * 6                     // 360 / 60 = 6 degrees per second
    
    //style.transformation to rotate hands
    hour.style.transform = 'rotate(' + degreeHour + 'deg)'
    minute.style.transform = 'rotate(' + degreeMinute + 'deg)'
    second.style.transform = 'rotate(' + degreeSecond + 'deg)'

    //And now it ticks
    setTimeout(ticker, 1000)
}
ticker()

