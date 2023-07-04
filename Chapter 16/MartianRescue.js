// declare variables
var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");

// todo: make an empty array called answers 
var answers = [];
/* todo: listen for clicks on the submit button and call the getAnswer() function when they happen */
submit.addEventListener("click", getAnswer);

// todo: call the function to ask the first question
askQuestion(0);

/* askQuestion() asks a question, based on the number passed to it */
function askQuestion(questionNumber) {
    answer.style.display = "block";
    answers.length = questionNumber;

    switch (questionNumber) {
        case 0: 
            question.innerHTML = "Are you ready to play?";
            break;
        case 1: 
            question.innerHTML = "Help, or enjoy your day off?";
            break;
        case 2: 
            question.innerHTML = "Go to Hennies, or go to the wall?";
            break;
        default:
            break;
    }
}

/* getAnswer() gets the answer from the text field and pushes it into the answers array, then calls the continueStory function*/
function getAnswer() {
    cleanInput = yourAnswer.value.toUpperCase();
    answers.push(cleanInput);

    yourAnswer.value = "";
    continueStory(answers.length - 1);
}

/* continueStory() displays part of the story or an error based on the value of an item in the answers array */
function continueStory(answerNumber) {
    switch (answerNumber) {
        case 0:
            if (answers[0] === "YES") {
                story.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "NO") {
                story.innerHTML = document.getElementById("answer02").innerHTML;
                askQuestion(0);
            } else {
                story.innerHTML = document.getElementById("erro").innerHTML;
                askQuestion(0);
            }
            break;
        case 1:
            if (answers[1] === "HELP") {
                story.innerHTML = document.getElementById("answer11").innerHTML;
                askQuestion(2);
            } else if (answers[1] === "ENJOY DAY") {
                story.innerHTML = document.getElementById("answer12").innerHTML;
                theEnd();
            } else {
                story.innerHTML = document.getElementById("err1").innerHTML;
                askQuestion(1);
            }
            break;
        case 2: 
            if (answers[2] === "GO TO HENNIES") {
                story.innerHTML = document.getElementById("answer21").innerHTML;
                theEnd();
            } else if (answers[2] === "GO TO WALL") {
                story.innerHTML = document.getElementById("answer22").innerHTML;
                theEnd();
            } else {
                story.innerHTML = document.getElementById("err2").innerHTML;
                askQuestion(2);
            }
            break;
        default:
            story.innerHTML = "The story is over!";
            break;
    }

}

/* theEnd() ends the story and hides the input field */
function theEnd() {
    story.innerHTML += "<p> The end. </p>";
    question.innerHTML = "";
    answer.style.display = "none";
}
