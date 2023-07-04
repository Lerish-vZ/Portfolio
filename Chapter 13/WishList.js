var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing); 

var myList = [];
var myListArea = document.getElementById("wishList");


function addTheThing() {
    var theThing = document.getElementById("iWant");

    addToTheList(theThing);
    resetInput(theThing);
}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    
    var newListItem = document.createElement("li");

    newListItem.innerHTML = myList[myList.length - 1];
    myListArea.appendChild(newListItem); //this adds a new item to the <ul>, myListArea references this element (we made it a global variable at the top of the code).
}


function resetInput(inputToReset) {
    inputToReset.value = "";    
}


function printView() {
  var listPage = document.getElementById("listPage");
  var formArea = document.getElementById("formArea");
  formArea.style.display = "none"; //This hides the form, you are referencing to the css value of the form and changing it to none

  listPage.className = "print"; //This changes the html element of the first div to: <div id = "listPage" class = "print"> 
                                    //   The print class is used in the CSS to style the page differently.
                                    //   In other words, when the print class is assigned to the
                                    //   listPage div, it changes the way elements in the document
                                    //   are styled, using the style properties set for print in the CSS.
    
    myListArea.innerHTML = "";
    myList.sort(); //sorts array alphabetically

    for (var i = 0; i< myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
}
