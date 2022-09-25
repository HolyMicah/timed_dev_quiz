var introPage = document.querySelector("#introSection")
var highScoreLine = document.querySelector("#highScoresList")

var questionsPage = document.querySelector("#questionQuestions")
var askQuestion = document.querySelector("#questionId")
var grade = document.querySelector("#checkAnswer")
var ansButtons = document.querySelectorAll(".choice")
var ans1 = document.querySelector("#btn1")
var ans2 = document.querySelector("#btn2")
var ans3 = document.querySelector("#btn3")
var ans4 = document.querySelector("#btn4")

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
var questionNumber = 0
  
window.onload = function hidePages() {
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
    introPage.setAttribute("hidden", true)
    questionsPage.removeAttribute("hidden");
    intervalID = setInterval(countdown, 1000);
    time = 60;
    displayTime();
    nextQuestion(questionNumber);
};


function nextQuestion() {
  askQuestion.textContent = questionsArr[questionNumber].questionText;
  ans1.textContent = questionsArr[questionNumber].options[0];
  ans2.textContent = questionsArr[questionNumber].options[1];
  ans3.textContent = questionsArr[questionNumber].options[2];
  ans4.textContent = questionsArr[questionNumber].options[3];
 
}



function checkAnswer(event){
  event.preventDefault();
  
  if(event.target.value == questionsArr[questionNumber].answer){
    grade.textContent = "Correct!";
    score = score + 1;
  } else{
    time = time - 10
    grade.textContent = "Incorrect. The correct answer is " + questionsArr[questionNumber].answer + " .";
  }

  if(questionNumber < questionsArr.length -1){
    nextQuestion(questionNumber++);
  }else{
    endQuiz();
  }
}



















function endQuiz(){
    
    resultsPage.removeAttribute("hidden");
    clearInterval(intervalID); 
}


ansButtons.forEach(function(click){
  click.addEventListener("click", checkAnswer);
});