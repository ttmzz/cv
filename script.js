const quizData = [
    {
        question: "Qual o número natural resultante da adição de 2.467 e 347 ?",
        a: "2.704",
        b: "2.814",
        c: "4.324",
        d: "2.824",
        correct: "b",
    },
    {
        question: "Qual o resultado da subtração de 679 - 38 ?",
        a: "299",
        b: "641",
        c: "421",
        d: "631",
        correct: "b",
    },
    {
        question: "O que significa HTML?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Qual o valor der PI?",
        a: "3,142",
        b: "3,141",
        c: "1,777",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Qual o resultado da exprerssão 4 x 1000 + 3 x 10 + 5 x 1 :",
        a: "5455",
        b: "4035",
        c: "4305",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
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
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${quizData.length} perguntas.</h2>
                
                <button onclick="location.reload()">recarregar</button>
            `;
        }
    }
});
