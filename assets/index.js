var introPage = document.querySelector("#introSection")
var highScoreLine = document.querySelector("#highScoresList")

var questionsPage = document.querySelector("#questionQuestions")
var question = document.querySelector("#questionId")
var grade = document.querySelector("#checkAnswer")

var resultsPage = document.querySelector("#quizResults")
var score = document.querySelector("#finalScore")
var initials = document.querySelector("#initial")
var submitInitials = document.querySelector("#userInitials")

var highScoresList = document.querySelector("#highScorePage")
var back = document.querySelector("#back")
var clear = document.querySelector("#clear")
var scoreHistory = document.querySelector("#scoreHistory")

var qI = 0
var score = 0
var questionsArr = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];

var intervalID;
var time;
var currentQuestion;
  
function hidePages() {
    introPage.setAttribute("hidden", true);
    questionsPage.setAttribute("hidden", true);
    resultsPage.setAttribute("hidden", true);
    highScoresList.setAttribute("hidden", true);
  }





function countdown(){
    time--;
    displayTime();
    if (time < 1) {
      endQuiz();
    }
  }


function displayTime() {
    let timeDisplay = document.querySelector("#timerCount");
    timeDisplay.textContent = time;
}

 

document.querySelector("#start_quiz").addEventListener("click", startQuiz); 

function startQuiz(){
    hidePages();
    questionsPage.removeAttribute("hidden");
    intervalID = setInterval(countdown, 1000);
    displayTime();
    time = 60
};

function endQuiz(){
    hidePages();
    resultsPage.removeAttribute("hidden");
    clearInterval(intervalID); 
}
