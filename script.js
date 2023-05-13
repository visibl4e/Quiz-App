const quizData = [
  {
    question: "How long have Vitaly been learning english language?",
    a: "9month",
    b: "2 years",
    c: "5years",
    d: "3years",
    correct: "d",
  },
  {
    question: "Which hours are more productive to work through the day?",
    a: "from 8 am to 12 am",
    b: "from 12 pm to 4pm",
    c: "from 4 pm to 8 pm",
    d: "from 8 pm to 12 am",
    correct: "a",
  },
  {
    question: "How long people have to sleep at night to be at good mood?",
    a: "4 hours",
    b: "6 hours",
    c: "8 hours",
    d: "10 hours",
    correct: "c",
  },
  {
    question: "Who is the best actor?",
    a: "You",
    b: "Me",
    c: "Markiz",
    d: "No one",
    correct: "a",
  },
  {
    question: "Which country is the bigest by territory?",
    a: "Norway",
    b: "Canada",
    c: "China",
    d: "Russia",
    correct: "d",
  },
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  currentQuiz++;
}
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz]?.correct) {
      score++;
    }

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions. </h2> 
      <button onclick = "location.reload()">Reload</button>`;
    }
  }
});
