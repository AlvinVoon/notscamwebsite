console.log("Game started");

// SOUND SETUP
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const timeoutSound = new Audio("timeout.mp3");

const homeScreen = document.querySelector('.logo')

homeScreen.addEventListener('click', () => {
  window.location.href = "index.html";
});

// QUESTIONS

let questions = [{
        level: "Easy",
        question: "Which website is REAL?",
        options: [
            "maybank-secure-login.com",
            "maybank2u.com.my",
            "maybank-login-safe.net"
        ],
        correct: 1,
        explanation: "Only 'maybank2u.com.my' is the official domain."
    },
    {
        level: "Easy",
        question: "Which website is REAL?",
        options: [
            "lazada-deals.net",
            "lazada.com.my",
            "lazada-sale.my"
        ],
        correct: 1,
        explanation: "Official Lazada uses 'lazada.com.my' only."
    },
    {
        level: "Medium",
        question: "Which website is REAL?",
        options: [
            "cimbclicks-secure.com",
            "cimbclicks.com.my",
            "cimbclick-login.net"
        ],
        correct: 1,
        explanation: "Official CIMB is 'cimbclicks.com.my'."
    },
    {
        level: "Medium",
        question: "Which website is REAL?",
        options: [
            "grab-pay-secure.com",
            "grab.com/my",
            "grabwallet-login.net"
        ],
        correct: 1,
        explanation: "Grab official domain is 'grab.com'. Others are fake."
    },
    {
        level: "Medium",
        question: "Which website is REAL?",
        options: [
            "bankislam-secure.net",
            "bankislam.com.my",
            "bankislam-login.my"
        ],
        correct: 1,
        explanation: "Only 'bankislam.com.my' is legitimate."
    },
    {
        level: "Hard",
        question: "Which website is REAL?",
        options: [
            "tngdigital.com.my.secure-login.net",
            "tngdigital.com.my",
            "tngdigital-login.my"
        ],
        correct: 1,
        explanation: "Only exact domain is safe. Extra words = scam."
    },
    {
        level: "Hard",
        question: "Which website is REAL?",
        options: [
            "shopee.com.login-verify.net",
            "shopee.com.my",
            "shopee-secure.com"
        ],
        correct: 1,
        explanation: "Official Shopee MY domain is 'shopee.com.my'."
    }
];


// STATE
let current = 0;
let score = 0;
let timeLeft = 5;
let timerInterval;

let correctAsnswer; 
// LOAD QUESTION
function loadQuestion() {
    if (current >= questions.length) {
        endGame();
        return;
    }

    let q = questions[current];

    document.getElementById("question").innerText =
        `[${q.level}] ${q.question}`;
        
        const shuffledOptions = [...q.options];

for (let i = shuffledOptions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
}

// Assign to elements
shuffledOptions.forEach((option, index) => {
    if (option == q.options[1])
    {
        correctAsnswer = index;
        console.log("this is the correct one", index);
    }
  document.getElementById(`option${index}`).innerText = option;
});

    document.getElementById("message").innerText = "";

    startTimer();
}

// TIMER
function startTimer() {
    clearInterval(timerInterval);

    timeLeft = 5;
    let timerBar = document.getElementById("timer");

    timerInterval = setInterval(() => {
        timeLeft -= 0.1;
        timerBar.style.width = (timeLeft / 5) * 100 + "%";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeoutSound.play();
            showExplanation("⏰ Time's up!");
        }
    }, 100);
}

// ANSWER
function selectAnswer(index) {
    clearInterval(timerInterval);
    let q = questions[current];

    console.log(index, q.correct);

    if (index === correctAsnswer) {
        score++;
        correctSound.play();
        showExplanation("✅ Correct! " + q.explanation);
    } else {
        wrongSound.play();
        showExplanation("❌ Wrong! " + q.explanation);
    }

    document.getElementById("score").innerText = score;
}

// EXPLANATION
function showExplanation(text) {
    document.getElementById("message").innerText = text;

    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

// NEXT
function nextQuestion() {
    current++;
    loadQuestion();
}

// END GAME + REWARD SCREEN
function endGame() {
    let resultText = "";

    if (score === questions.length) {
        resultText = "🛡️ Scam Master!";
    } else if (score >= 4) {
        resultText = "🔍 Scam Spotter!";
    } else {
        resultText = "⚠️ Stay Alert!";
    }

    document.querySelector(".game-container").innerHTML = `
    <h1>🎉 Mission Complete!</h1>
    <h2>Your Score: ${score}/${questions.length}</h2>
    <p>${resultText}</p>
    <br>
    <h3>🎁 Show this screen to claim your reward!</h3>
    <button onclick="location.reload()">Play Again</button>
  `;
}


const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  loadQuestion();
});
