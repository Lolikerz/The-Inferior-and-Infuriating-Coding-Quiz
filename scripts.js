var A = false
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        var audio = new Audio('Miami2.ogg');
        audio.play();
        showScores();
    
    }
    else {
        
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + " out of 11</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
        
};


const timeLeftDisplay = document.querySelector('#time-left')
    timeLeft = 30

    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0 ){
                clearInterval(timeLeft = 0)
                showScores();
                
            }

            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -= 1
        }, 1000)
    }

// create questions here
var questions = [
    new Question("Which language is used for structuring content on web pages?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JavaScript", "CSS", "XHTML"], "CSS"),
    new Question("Which language is used for logic and scripting on web pages?", ["CSS", "HTML","JavaScript", "XHTML"], "JavaScript"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which human needs are recommended to satisfy before coding?", ["Food and Water", "Good Nights Sleep","Plenty of Exercise","All of the Above"], "All of the Above"),
    new Question("Which coding language is recommended to start learning?", ["C#", "Javascript","Python","Scratch"], "Python"),
    new Question("Which OS uses Git Bash?", ["Windows", "Mac","Linux","TempleOS"], "Windows"),
    new Question("Which Git command uploads files to Github Repos?", ["Commit", "Add","Push","Pull"], "Push"),
    new Question("Which Git command prepares files for upload?", ["Commit", "Add","Push","Pull"], "Add"),
    new Question("Which Git command adds update information when uploading files?", ["Commit", "Add","Push","Pull"], "Commit"),
    new Question("Who invented the Reuben Sandwich?", ["David Reuben", "Arnold Reuben","John Reuben", "Adrian Reuben"], "Arnold Reuben")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
var startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
    populate();
    countDown();
})