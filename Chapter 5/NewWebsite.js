// document.getElementById("myName").innerHTML = "Lerisha";

var item1;
var item2;
var item3;

document.getElementById("changeList").onclick = newList; //"changeList" - is your buttons id that you gave it in the html file

function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new thrid thing: ");
    updateList();
}

function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
}