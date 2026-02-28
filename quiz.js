const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System"
        ],
        correct: 1
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.getElementsByClassName("option");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = q.options[i];
    }

    resultEl.textContent = "";
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        score++;
        resultEl.textContent = "Correct!";
    } else {
        resultEl.textContent = "Wrong!";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Finished!";
        resultEl.textContent = "Your score: " + score;
        nextBtn.style.display = "none";
    }
}

loadQuestion();