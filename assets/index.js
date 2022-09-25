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
var tally = 0

var questionsArr = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
      answer: "all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "JavaScript",
        "terminal/bash",
        "for loops",
        "console.log",
      ],
      answer: "console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["break", "stop", "halt", "exit"],
      answer: "break",
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
  
  ans1.value = questionsArr[questionNumber].options[0];
  ans2.value = questionsArr[questionNumber].options[1];
  ans3.value = questionsArr[questionNumber].options[2];
  ans4.value = questionsArr[questionNumber].options[3];

  // questionsArr[questionNumber].choices.forEach(function(options, i) {
  //   ansButtons.setAttribute("class", "option");
  //   ansButtons.setAttribute("value", options);
  // });
}



function checkAnswer(event){
  event.preventDefault();
  
  

  if(this.value == questionsArr[questionNumber].answer){
    grade.textContent = "Correct!";
    tally = tally + 1;
  } else{
    tally = tally - 1;
    time = time - 10
    grade.textContent = "Incorrect. The correct answer is " + questionsArr[questionNumber].answer + " .";
  }

  if(questionNumber < questionsArr.length -1){
    nextQuestion(questionNumber++);
  }else{
    endQuiz();
    console.log(score)
  }
}

function tallyScore(){
  score.textContent = "Your final score is " + tally + "/5"
}



















function endQuiz(){
    questionsPage.setAttribute("hidden", true)
    resultsPage.removeAttribute("hidden");
    clearInterval(intervalID); 
    tallyScore()
}


ansButtons.forEach(function(click){
  click.addEventListener("click", checkAnswer);
});