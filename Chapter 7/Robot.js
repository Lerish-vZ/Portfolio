document.getElementById("lefteye").style.backgroundColor = "purple";
//document.getElementById("head").style.transform = "rotate(15deg)";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";

//document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("nose").style.borderRadius = "6px";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";



//Starting animation
var righteye = document.getElementById("righteye");

//adding event listener right eye
righteye.addEventListener("click",moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var animation = setInterval(frame, 100) //draw every 100ms

    function frame () {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20) {
            clearInterval(animation); //clears the eye from moving anymore
        }
    }
} 

//animation moving the left eye
var lefteye = document.getElementById("lefteye");
lefteye.addEventListener("click",moveUpDown);



//animation moving left arm
var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var top = 0;

    var animation = setInterval(frame, 100);

    function frame () {
        robotPart.style.left = left+ "%";
        left++;
        if (left === 70) {
            clearInterval(animation);
        }
    }
}



//own animation: head
var headRotate = document.getElementById("head");
headRotate.addEventListener("click", moveHead);

function moveHead(e) {
   // var robotPart = e.target;
    var rotate  = 0;

    var animation = setInterval(frame, 90);

    function frame () {
        headRotate.style.transform = "rotate(" + rotate +  "deg)";
        rotate = rotate + 15;
        if (rotate === 375) {
            clearInterval(animation);
        }
    }
}
// var people = ["Teddy", "Cathy", "Bobby"];

// // alert(people.join(" "));
// // alert(people.reverse());
// alert(people.join(" "));
// people.splice(1,0,"Gene");
// alert(people);