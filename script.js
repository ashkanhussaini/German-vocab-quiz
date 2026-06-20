// ---------- Quiz Data ----------
const questions = [
  {
    question: "What does 'die Wohnung' mean?",
    answers: ["The apartment", "The window", "The kitchen", "The street"],
    correctIndex: 0,
  },
  {
    question: "What does 'der Termin' mean?",
    answers: ["The weather", "The appointment", "The friend", "The meal"],
    correctIndex: 1,
  },
  {
    question: "What does 'sich bewähren' mean?",
    answers: ["To prove oneself / work out well", "To complain", "To forget", "To travel"],
    correctIndex: 0,
  },
  {
    question: "What does 'die Bewerbung' mean?",
    answers: ["The vacation", "The job application", "The library", "The neighbor"],
    correctIndex: 1,
  },
  {
    question: "What does 'erreichen' mean?",
    answers: ["To cook", "To reach / achieve", "To break", "To sleep"],
    correctIndex: 1,
  },
  {
    question: "What does 'die Erfahrung' mean?",
    answers: ["The experience", "The error", "The exit", "The decision"],
    correctIndex: 0,
  },
  {
    question: "What does 'der Arbeitgeber' mean?",
    answers: ["The colleague", "The employer", "The customer", "The student"],
    correctIndex: 1,
  },
  {
    question: "What does 'verbessern' mean?",
    answers: ["To delay", "To improve", "To avoid", "To repeat"],
    correctIndex: 1,
  },
  {
    question: "What does 'die Voraussetzung' mean?",
    answers: ["The requirement / precondition", "The opinion", "The reward", "The mistake"],
    correctIndex: 0,
  },
  {
    question: "What does 'unterstützen' mean?",
    answers: ["To support", "To interrupt", "To compare", "To translate"],
    correctIndex: 0,
  },
];

// ---------- State ----------
let currentIndex = 0;
let score = 0;
let answered = false;

// ---------- DOM Elements ----------
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');

const finalScore = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');

// ---------- Screen helpers ----------
function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((s) => s.classList.add('is-hidden'));
  screen.classList.remove('is-hidden');
}

// ---------- Quiz logic ----------
function startQuiz() {
  currentIndex = 0;
  score = 0;
  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  nextBtn.classList.add('is-hidden');

  const current = questions[currentIndex];
  questionCounter.textContent = `Question ${currentIndex + 1}/${questions.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
  progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;

  questionText.textContent = current.question;
  answersContainer.innerHTML = '';

  current.answers.forEach((answerText, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answerText;
    btn.addEventListener('click', () => selectAnswer(index, btn));
    answersContainer.appendChild(btn);
  });
}

function selectAnswer(selectedIndex, selectedBtn) {
  if (answered) return;
  answered = true;

  const current = questions[currentIndex];
  const allButtons = answersContainer.querySelectorAll('.answer-btn');

  allButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === current.correctIndex) {
      btn.classList.add('is-correct');
    }
  });

  if (selectedIndex === current.correctIndex) {
    score++;
  } else {
    selectedBtn.classList.add('is-wrong');
  }

  scoreDisplay.textContent = `Score: ${score}`;
  nextBtn.classList.remove('is-hidden');
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  progressFill.style.width = '100%';
  showScreen(resultScreen);

  finalScore.textContent = `${score} / ${questions.length}`;

  const percentage = (score / questions.length) * 100;
  let message;
  if (percentage === 100) {
    message = 'Perfect score! Excellent vocabulary.';
  } else if (percentage >= 70) {
    message = 'Great job! You know your vocabulary well.';
  } else if (percentage >= 40) {
    message = 'Good effort, but a bit more practice will help.';
  } else {
    message = 'Keep practicing — you will improve quickly.';
  }
  finalMessage.textContent = message;
}

// ---------- Event listeners ----------
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);
