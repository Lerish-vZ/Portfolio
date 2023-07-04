//create days of week array
var days = ["Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday"
];
//define types of weather
var weather = ["Sunny", "Partly sunny", "Partly cloudy",
  "Cloudy", "Rainning", "Snowing", "Thunderstorm", "Foggy"
];
//set min and max temperature
var maxTemp = 100;
var minTemp = 0;
//cost (to you) of a cup of lemonade
var lemonadeCost = 0.5;
//array for storing daily temps
var dailyTemp = [];

var openStand = document.getElementById("OpenTheStand");
openStand.addEventListener("click", openTheStand);
generateWeather();
/**
generates weather for the week
**/
function generateWeather() {
  var weatherToday;
  var tempToday;
  for (i = 0; i < days.length; i++) {
    weatherToday = weather[Math.floor(Math.random() * weather.length)];
    tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp)
    dailyTemp[i] = tempToday;
    document.getElementById("5DayWeather").innerHTML += "<div id= '" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

/*
calculates the glasses of lemonade sold
*/
function openTheStand() {
    var glassesSold = 0; //daily
    var totalGlasses = 0;//weekly
    var glassesLeft = 0;//left

    resetForm(); 

    var numGlasses = Number(document.getElementById("numGlasses").value);
    var glassPrice = Number(document.getElementById("glassPrice").value);

    for (var i = 0; i < days.length; i++) {
        glassesSold = Math.floor(dailyTemp[i]/ glassPrice);

        glassesLeft = numGlasses - totalGlasses;

        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }
        totalGlasses = glassesSold + totalGlasses;

        document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade. </p>";
    }
    displayResults(numGlasses, glassPrice, totalGlasses);
}

function resetForm() {
    document.getElementById("result").innerHTML = "";
}

function displayResults(weeklyInventoty, glassPrice, weeklySales) {
    var revenue = weeklySales * glassPrice;
    var expenses = weeklyInventoty * lemonadeCost;
    var leftOver = weeklyInventoty - weeklySales;
    var profit = revenue -expenses;

    document.getElementById("result").innerHTML += "<p> You sold a total of " + weeklySales + " glasses of lemonade this week. </p>";
    document.getElementById("result").innerHTML += "<p> Total revenue: R" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p> You have " + leftOver + " glasses of lemonade left over. <p>";
    document.getElementById("result").innerHTML += "<p> Each glass costs you R" + lemonadeCost + ". Your profit was R" + profit + ". </p>";
}