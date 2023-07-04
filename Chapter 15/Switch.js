// var myNumber = prompt("Enter your favorite day of the week!").toLowerCase();
// var theResponse;

// switch (myNumber) {
// case "Monday":
// theResponse = "Ack!";
// break; //For safety always put in the break to be sure it works correctly
// case "Tuesday":
// theResponse = "Taco day!";
// break;
// case "Wednesday":
// theResponse = "Halfway there!";
// break;
// case "Thursday":
// theResponse = "It’s the new Friday!";
// break;
// case "Friday":
// theResponse = "TGIF! Yeah!";
// break;
// case "Saturday":
// theResponse = "What a day!";
// break;
// case "Sunday":
// theResponse = "Sunday = Funday!";
// break;
// default:
// theResponse = "I haven’t heard of that one!";
// break;
// }
// alert (theResponse);


var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity());

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // todo: find out the day of the week.
    var dayOfWeek = d.getDay();
    var youShould;

    switch (dayOfWeek) { 
        case 0: 
            youShould = "Take it easy. You've earned it!";
            break; 
        case 1: 
            youShould = "Monday bluesss... Just push through!";
            break;
        case 2:
            youShould = "Guess what... It's not Monday!";
            break;
        case 3:
            youShould = "Small Saterday. It's braai day!";
            break; 
        case 4:
            youShould = "Almost there!";
            break;
        case 5:
            youShould = "The best day ever";
            break;
        case 6: 
            youShould = "What a day!";
            break;
        default: 
            youShould = "Hmmm. Something has gone wrong.";
            break;
    }

    document.getElementById("thingToDo").innerHTML = youShould;
}