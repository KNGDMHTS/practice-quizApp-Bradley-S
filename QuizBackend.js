//Setup
let questions = [
    {
        question: "Question 1: What programming language works with HTML and CSS to create dynamic webpages?",
        correctAnswer: 0,
        answers: ["JavaScript", "PHP", "C++", "Python"]
    },
    {
        question: "Question 2: What tag is used to link Javascript with HTML and CSS?",
        correctAnswer: 1,
        answers: ["body", "script", "JS", "head"]
    },
    {
        question: "Question 3: When will Final Fantasy XIV: Evercold be releasing?",
        correctAnswer: 3,
        answers: ["December 2026", "November 2026", "March 2027", "January 2027"]
    }
];

let currentQuestion = 0;

let answerButtons = [null, null, null, null];

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i] = document.getElementById(`${"Answer" + (i + 1)}`)
}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", answerQuestion);
}

updateQAndA();

//methods
function answerQuestion() {
    let answerIndex = this.id.slice(6);
    if (questions[currentQuestion].correctAnswer == (answerIndex-1)) {
        document.getElementById("feedback").textContent = "Correct Answer!";
    }
    else {
        let correct = questions[currentQuestion]["correctAnswer"];
        document.getElementById("feedback").textContent = `Incorrect. You answered "${questions[currentQuestion]["answers"][answerIndex-1]}". The correct answer was "${questions[currentQuestion]["answers"][correct]}".`;
    }

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener("click", answerQuestion);
    }

    document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
}

function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % questions.length;
    updateQAndA();
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", answerQuestion);
    }
    this.removeEventListener("click", nextQuestion);
}

function updateQAndA() {
    document.getElementById("question").textContent = questions[currentQuestion]["question"];
    
    for (let i = 0; i < questions[currentQuestion]["answers"].length; i++) {
        answerButtons[i].value = questions[currentQuestion]["answers"][i];
    }

    document.getElementById("feedback").textContent = "";
}