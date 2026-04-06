// Данные квиза: 15 вопросов по UML (5 тем × 3 вопроса), по 3 варианта ответа
const quizData = [
    {
        block: "Диаграмма классов",
        question: "Что описывает диаграмма классов?",
        options: [
            "Структуру классов программы и только статические связи между ними",
            "Типы объектов и различные виды отношений",
            "Жизненный цикл объектов и порядок вызова методов во времени",
        ],
        correctIndex: 1,
    },
    {
        block: "Диаграмма классов",
        question: "Какие существуют три наиболее важных типа отношений в этой диаграмме?",
        options: [
            "Ассоциация, наследование, агрегация",
            "Ассоциация, композиция, зависимость",
            "Наследование, реализация, зависимость",
        ],
        correctIndex: 0,
    },
    {
        block: "Диаграмма классов",
        question: "Что означает связь пунктирной линией?",
        options: [
            "Зависимость или слабая связь между классами",
            "Агрегацию «часть–целое» с общим жизненным циклом",
            "Наследование",
        ],
        correctIndex: 2,
    },

    {
        block: "Диаграмма компонентов",
        question: "Что иллюстрирует диаграмма компонентов?",
        options: [
            "Последовательность сообщений между объектами во времени",
            "Архитектуры компонентов программного обеспечения и их зависимости",
            "Только исходный код классов и их методы без модульной структуры",
        ],
        correctIndex: 1,
    },
    {
        block: "Диаграмма компонентов",
        question: "В каком виде можно представить интерфейс?",
        options: [
            "В виде куба с именем — так же, как обозначается сам компонент",
            "В виде кружочка",
            "В виде овала с подписью, как на диаграмме прецедентов (use case)",
        ],
        correctIndex: 1,
    },
    {
        block: "Диаграмма компонентов",
        question: "Что делает порт?",
        options: [
            "Определяет различимую точку взаимодействия между компонентом и окружающей средой",
            "Связывает два компонента исключительно через отношение наследования классов",
            "Указывает версию развёрнутого артефакта на узле сети",
        ],
        correctIndex: 0,
    },

    {
        block: "Диаграмма развёртывания",
        question: "Что делает диаграмма развёртывания?",
        options: [
            "Помогает моделировать физический аспект объектно-ориентированной программной системы",
            "Описывает только логическую структуру пакетов и пространств имён",
            "Показывает сценарии использования системы актёрами",
        ],
        correctIndex: 0,
    },
    {
        block: "Диаграмма развёртывания",
        question: "Что такое Device?",
        options: [
            "Артефакт, представляющий исполняемый файл или библиотеку на носителе",
            "Узел без вычислительных ресурсов, предназначенный только для хранения данных",
            "Узел, который обладает некоторым общим вычислительным ресурсом со способностью обрабатывать развёрнутые на нём артефакты",
        ],
        correctIndex: 2,
    },
    {
        block: "Диаграмма развёртывания",
        question: "Что такое Artifact?",
        options: [
            "Элемент модели, который специфицирует некоторую физически существующую часть информации",
            "Узел сети, на который устанавливается и выполняется приложение",
            "Логический пакет для группировки классов без привязки к файлам",
        ],
        correctIndex: 0,
    },

    {
        block: "Диаграмма объектов",
        question: "Чем является диаграмма объектов?",
        options: [
            "Упрощённой формой диаграммы последовательностей",
            "Экземпляром диаграммы класса",
            "Отдельным видом диаграммы, не связанным с диаграммой классов",
        ],
        correctIndex: 1,
    },
    {
        block: "Диаграмма объектов",
        question: "Для чего служит диаграмма объектов?",
        options: [
            "Фиксирует только иерархию наследования классов на момент сборки проекта",
            "представления объектов и отношений между ними в конкретный момент времени",
            "Описывает общие правила на уровне типов, без привязки к конкретным экземплярам",
        ],
        correctIndex: 1,
    },
    {
        block: "Диаграмма объектов",
        question: "Чем является значение экземпляра (instance value)?",
        options: [
            "Имя класса, одинаковое для всех объектов на диаграмме",
            "Ссылка на тип атрибута без указания конкретного значения",
            "Спецификацией значения, которое идентифицирует некоторый экземпляр",
        ],
        correctIndex: 2,
    },

    {
        block: "Диаграмма пакетов",
        question: "Что такое пакет (package)?",
        options: [
            "Физический каталог на диске с исходным кодом одного модуля",
            "Элемент модели, используемый для группировки других элементов модели",
            "Сущность базы данных для хранения связанных таблиц",
        ],
        correctIndex: 1,
    },
    {
        block: "Диаграмма пакетов",
        question: "Что такое слияние пакетов (package merge)?",
        options: [
            "Направленное отношение между двумя пакетами, один из которых расширяет своё содержание посредством добавления содержимого другого пакета",
            "Объединение двух пакетов в один с автоматическим удалением всех совпадающих имён",
            "Отношение, при котором один пакет полностью заменяет другой без слияния содержимого",
        ],
        correctIndex: 0,
    },
    {
        block: "Диаграмма пакетов",
        question: "В виде чего можно представить import элемента?",
        options: [
            "В виде стрелки пунктирной линии между произвольными двумя классами на диаграмме",
            "В виде прямоугольника со списком всех public-методов импортируемого пакета",
            "В форме ссылки на импортируемый элемент",
        ],
        correctIndex: 2,
    },
];

// Счётчик прохождений (localStorage)
const COMPLETION_KEY = "uml_quiz_completions";

function getCompletionCount() {
    return parseInt(localStorage.getItem(COMPLETION_KEY) || "0", 10);
}

function incrementCompletionCount() {
    const count = getCompletionCount() + 1;
    localStorage.setItem(COMPLETION_KEY, String(count));
    return count;
}

function renderCompletionCounter() {
    const el = document.getElementById("completion-count");
    if (el) {
        el.textContent = String(getCompletionCount());
    }
}

// Состояние
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null); // индекс выбранного варианта или null

// Элементы DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const validationMessage = document.getElementById("validation-message");

const blockTitle = document.getElementById("block-title");
const questionCounter = document.getElementById("question-counter");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers-list");

const scorePercent = document.getElementById("score-percent");
const totalQuestionsEl = document.getElementById("total-questions");
const correctAnswersEl = document.getElementById("correct-answers");
const wrongAnswersEl = document.getElementById("wrong-answers");
const resultSummary = document.getElementById("result-summary");

const reviewBtn = document.getElementById("review-btn");
const restartBtn = document.getElementById("restart-btn");

const reviewBlockTitle = document.getElementById("review-block-title");
const reviewQuestionCounter = document.getElementById("review-question-counter");
const reviewQuestionText = document.getElementById("review-question-text");
const reviewAnswersList = document.getElementById("review-answers-list");
const reviewNote = document.getElementById("review-note");
const reviewPrevBtn = document.getElementById("review-prev-btn");
const reviewNextBtn = document.getElementById("review-next-btn");
const backToResultBtn = document.getElementById("back-to-result-btn");

// Управление этапами (раскладка колонок)
function setStage(stage) {
    document.body.dataset.stage = stage;
}

function updateProgress() {
    const total = quizData.length;
    const currentNumber = currentQuestionIndex + 1;
    questionCounter.textContent = `Вопрос ${currentNumber} из ${total}`;
    const percent = (currentNumber / total) * 100;
    progressFill.style.width = `${percent}%`;
}

// Рендер вопроса на экране квиза
function renderQuestion() {
    const q = quizData[currentQuestionIndex];

    blockTitle.textContent = q.block;
    questionText.textContent = q.question;
    validationMessage.hidden = true;

    updateProgress();

    answersList.innerHTML = "";
    const letters = ["а", "б", "в", "г", "д", "е"];

    q.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.className = "answer-option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.id = `answer-${index}`;
        input.className = "answer-input";
        input.value = String(index);

        if (userAnswers[currentQuestionIndex] === index) {
            input.checked = true;
        }

        const label = document.createElement("label");
        label.className = "answer-label";
        label.htmlFor = input.id;

        const letterSpan = document.createElement("span");
        letterSpan.className = "answer-letter";
        letterSpan.textContent = letters[index] ?? "?";

        const textSpan = document.createElement("span");
        textSpan.className = "answer-text";
        textSpan.textContent = option;

        label.appendChild(letterSpan);
        label.appendChild(textSpan);

        li.appendChild(input);
        li.appendChild(label);
        answersList.appendChild(li);
    });

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? "Завершить" : "Дальше";
}

function saveCurrentAnswerOrWarn() {
    const checked = answersList.querySelector("input[name='answer']:checked");
    if (!checked) {
        validationMessage.hidden = false;
        return false;
    }
    userAnswers[currentQuestionIndex] = Number(checked.value);
    validationMessage.hidden = true;
    return true;
}

// Подсчёт результатов
function calculateResults() {
    let correct = 0;
    quizData.forEach((q, index) => {
        if (userAnswers[index] === q.correctIndex) {
            correct += 1;
        }
    });
    const total = quizData.length;
    const wrong = total - correct;
    const percent = Math.round((correct / total) * 100);

    return { total, correct, wrong, percent };
}

function showResults() {
    const { total, correct, wrong, percent } = calculateResults();

    scorePercent.textContent = `${percent}%`;
    totalQuestionsEl.textContent = String(total);
    correctAnswersEl.textContent = String(correct);
    wrongAnswersEl.textContent = String(wrong);

    incrementCompletionCount();
    renderCompletionCounter();
}

// Рендер вопроса на экране разбора
function renderReviewQuestion() {
    const q = quizData[currentQuestionIndex];
    const userAnswerIndex = userAnswers[currentQuestionIndex];
    const correctIndex = q.correctIndex;

    reviewBlockTitle.textContent = q.block;
    reviewQuestionText.textContent = q.question;
    reviewQuestionCounter.textContent = `Вопрос ${currentQuestionIndex + 1} из ${quizData.length}`;

    reviewAnswersList.innerHTML = "";
    const letters = ["а", "б", "в", "г", "д", "е"];

    q.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.className = "answer-option";

        const label = document.createElement("div");
        label.className = "answer-label";

        const letterSpan = document.createElement("span");
        letterSpan.className = "answer-letter";
        letterSpan.textContent = letters[index] ?? "?";

        const textSpan = document.createElement("span");
        textSpan.className = "answer-text";
        textSpan.textContent = option;

        label.appendChild(letterSpan);
        label.appendChild(textSpan);

        // Подсветка
        if (index === correctIndex && userAnswerIndex === index) {
            label.classList.add("answer-label--user-correct");
        } else if (index === correctIndex) {
            label.classList.add("answer-label--correct");
        } else if (userAnswerIndex === index && userAnswerIndex !== correctIndex) {
            label.classList.add("answer-label--user-wrong");
        }

        li.appendChild(label);
        reviewAnswersList.appendChild(li);
    });

    if (userAnswerIndex === correctIndex) {
        reviewNote.textContent = "Ответ верный.";
    } else if (userAnswerIndex == null) {
        reviewNote.textContent = "На этот вопрос не был дан ответ. Правильный вариант подсвечен зелёным.";
    } else {
        reviewNote.textContent = "Ответ неверный. Зелёным подсвечен правильный вариант, красным — выбранный тобой.";
    }
}

// Сброс состояния для нового прохождения
function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
}

// Обработчики событий
startBtn.addEventListener("click", () => {
    resetQuiz();
    setStage("quiz");
    renderQuestion();
});

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex -= 1;
        renderQuestion();
    }
});

nextBtn.addEventListener("click", () => {
    const ok = saveCurrentAnswerOrWarn();
    if (!ok) return;

    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex += 1;
        renderQuestion();
    } else {
        setStage("result");
        showResults();
    }
});

reviewBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    setStage("review");
    renderReviewQuestion();
});

restartBtn.addEventListener("click", () => {
    resetQuiz();
    setStage("quiz");
    renderQuestion();
});

reviewPrevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex -= 1;
        renderReviewQuestion();
    }
});

reviewNextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex += 1;
        renderReviewQuestion();
    }
});

backToResultBtn.addEventListener("click", () => {
    setStage("result");
});

// Для уверенности заполняем счётчики по умолчанию и выставляем начальный этап
document.addEventListener("DOMContentLoaded", () => {
    totalQuestionsEl.textContent = String(quizData.length);
    renderCompletionCounter();
    setStage("start");
});
