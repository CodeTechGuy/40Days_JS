const quizData = [
    {
        question: "In JavaScript, what is the most accurate explanation of why a Promise callback executes after the current synchronous call stack completes?",
        options: [
            "Promise callbacks are always placed directly into the browser's rendering queue",
            "Promises execute callbacks synchronously unless the Promise is rejected",
            "Promise reactions are queued as microtasks and are processed after the current stack completes",
            "Promises create a new operating-system thread for every callback"
        ],
        correct: 2
    },
    {
        question: "A production web application experiences increasing memory usage after users navigate repeatedly between views in a single-page application. Which issue is the most likely cause if event listeners are attached on every mount but never removed?",
        options: [
            "JavaScript primitive values being stored in CPU registers",
            "Detached event handlers retaining references to objects",
            "Excessive HTTP compression",
            "CPU branch prediction failure"
        ],
        correct: 1
    },
    {
        question: "Consider the following JavaScript:\n\nconst obj = { value: 10 };\n\nObject.freeze(obj);\n\nobj.value = 20;\n\nWhat is true in strict mode?",
        options: [
            "Object.freeze affects only the object's prototype",
            "The property changes to 20 because freeze only affects nested properties",
            "The property changes only if value was originally configurable",
            "A TypeError is thrown when attempting to modify the frozen property"
        ],
        correct: 3
    },
    // {
    //     question: "A frontend team wants to prevent a low-priority analytics task from blocking rendering and user interactions. Which browser API is specifically designed to allow work to be scheduled during idle periods?",
    //     options: [
    //         "MutationObserver",
    //         "setImmediate",
    //         "requestIdleCallback",
    //         "queueMicrotask"
    //     ],
    //     correct: 2
    // },
    // {
    //     question: "Which statement most accurately describes event delegation in the DOM?",
    //     options: [
    //         "Event delegation works only for keyboard events",
    //         "A parent handles events from descendants by relying on event propagation",
    //         "The browser disables bubbling for delegated events",
    //         "Every child element receives an independent listener automatically"
    //     ],
    //     correct: 1
    // },
    // {
    //     question: "A JavaScript application performs a CPU-intensive synchronous calculation for 500 ms on the main thread. Which consequence is most directly expected in a browser?",
    //     options: [
    //         "The browser cannot process normal main-thread tasks, potentially causing UI jank",
    //         "All Web Workers are terminated",
    //         "HTTP requests automatically become encrypted",
    //         "The garbage collector is permanently disabled"
    //     ],
    //     correct: 0
    // },
    // {
    //     question: "Which architecture best isolates CPU-heavy JavaScript computation from the browser's main UI thread?",
    //     options: [
    //         "Using CSS containment",
    //         "Using a MutationObserver",
    //         "Using localStorage",
    //         "Using a Web Worker"
    //     ],
    //     correct: 3
    // },
    // {
    //     question: "An application uses Promise.all() for five independent API requests. One request rejects. What happens to the Promise returned by Promise.all()?",
    //     options: [
    //         "It silently removes the rejected promise and resolves",
    //         "It rejects when one input promise rejects",
    //         "It retries the rejected promise automatically",
    //         "It waits for all promises and always resolves with successful results"
    //     ],
    //     correct: 1
    // },
    // {
    //     question: "Which statement about JavaScript closures is most accurate?",
    //     options: [
    //         "Closures prevent garbage collection of every object created inside the outer function",
    //         "A closure copies every variable from its outer scope into the function",
    //         "A closure allows a function to retain access to its lexical environment after the outer function has returned",
    //         "Closures exist only when using classes"
    //     ],
    //     correct: 2
    // },
    // {
    //     question: "A React-like UI framework repeatedly renders a large component tree. Which optimization principle generally provides the strongest architectural benefit before applying low-level memoization everywhere?",
    //     options: [
    //         "Disable browser caching",
    //         "Reduce unnecessary state scope and isolate frequently changing state",
    //         "Increase the number of global mutable variables",
    //         "Replace all asynchronous operations with synchronous operations"
    //     ],
    //     correct: 1
    // },
    // {
    //     question: "Which HTTP caching strategy is most appropriate when static assets are content-hashed, for example app.8f3a91.js?",
    //     options: [
    //         "No caching because JavaScript must always be downloaded",
    //         "Caching only when the server returns a 500 response",
    //         "Long-lived immutable caching because the filename changes when content changes",
    //         "Short caching with no validation"
    //     ],
    //     correct: 2
    // },
    // {
    //     question: "A backend API is horizontally scaled across multiple instances. Why is storing authentication session state only in process memory problematic?",
    //     options: [
    //         "Horizontal scaling prevents cookies from being transmitted",
    //         "In-memory state automatically disables TLS",
    //         "Process memory cannot store strings",
    //         "Subsequent requests may reach another instance that does not possess the original session state"
    //     ],
    //     correct: 3
    // },
    // {
    //     question: "Which property of an idempotent API operation is most important when designing retry-safe distributed systems?",
    //     options: [
    //         "The operation must use WebSockets",
    //         "The operation must never return an error",
    //         "Repeating the same request should not produce additional unintended effects",
    //         "The operation must always execute in exactly one millisecond"
    //     ],
    //     correct: 2
    // },
    // {
    //     question: "A distributed service receives the same payment command twice because a client retried after a network timeout. Which design mechanism most directly prevents duplicate processing?",
    //     options: [
    //         "Increasing the HTTP response body size",
    //         "Using an idempotency key with durable deduplication",
    //         "Increasing CSS specificity",
    //         "Disabling database transactions"
    //     ],
    //     correct: 1
    // },
    // {
    //     question: "What is the primary purpose of a Content Security Policy (CSP) in a web application?",
    //     options: [
    //         "To restrict which resources and script sources the browser is allowed to execute or load",
    //         "To replace HTTPS certificates",
    //         "To automatically encrypt database records",
    //         "To increase JavaScript execution speed"
    //     ],
    //     correct: 0
    // },
    // {
    //     question: "A service has p99 latency of 2 seconds while its average latency is 150 ms. What does this primarily indicate?",
    //     options: [
    //         "The average latency calculation must always be incorrect",
    //         "Every request takes approximately 2 seconds",
    //         "The service has no latency variability",
    //         "A small but significant tail of requests experiences substantially higher latency"
    //     ],
    //     correct: 3
    // },
    // {
    //     question: "A team adds a cache in front of a database and observes stale values after writes. Which architectural issue does this most directly represent?",
    //     options: [
    //         "TLS certificate negotiation",
    //         "Cache consistency and invalidation",
    //         "DOM event bubbling",
    //         "CPU instruction pipelining"
    //     ],
    //     correct: 1
    // },
    // {
    //     question: "Which database indexing principle is generally correct when designing a composite index on columns used together in filtering and sorting?",
    //     options: [
    //         "Index column order can materially affect which query predicates and sort operations can efficiently use the index",
    //         "Adding every column to every index always improves performance",
    //         "Indexes eliminate the need to analyze query execution plans",
    //         "Column order is irrelevant in every database"
    //     ],
    //     correct: 0
    // },
    // {
    //     question: "A service starts timing out under heavy traffic even though CPU utilization is moderate. Which investigation is most appropriate before assuming the CPU is the bottleneck?",
    //     options: [
    //         "Remove all database indexes",
    //         "Disable all logging permanently",
    //         "Inspect downstream latency, connection pools, queue depth, I/O, and saturation signals",
    //         "Only increase CPU indefinitely"
    //     ],
    //     correct: 2
    // },
    // {
    //     question: "A senior engineer proposes making every microservice independently deployable but shares a single database schema tightly coupled across all services. What architectural concern does this create?",
    //     options: [
    //         "It guarantees complete service autonomy",
    //         "It guarantees eventual consistency",
    //         "It prevents network communication between services",
    //         "The shared database can become a coupling point that limits independent evolution and deployment"
    //     ],
    //     correct: 3
    // }
];

const questionEle = document.querySelector("#question");
const optionsEle = document.querySelector("#options");
const nextBtn = document.getElementById("next-btn");
const timerEle = document.querySelector("#timer");
const resultEle = document.getElementById("result");


let questions = [...quizData].sort(() => Math.random() - 0.5);
let currQuestion = 0;
let score = 0;
let timer;
let timeLeft;

function loadQuestion(){
    clearInterval(timer);
    timeLeft = 15;
    updateTimer();
    timer = setInterval(countdown, 1000);

    const q = questions[currQuestion];
    questionEle.textContent = `Q${currQuestion + 1}. ${q.question}`;
    optionsEle.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option;
        btn.addEventListener("click", () => selectAnswer(index , true))
        optionsEle.appendChild(btn)
    });

    nextBtn.style.display = "none";
};

function countdown(){
    timeLeft--;
    updateTimer();

    if(timeLeft === 0){
        clearInterval(timer);
        selectAnswer(questions[currQuestion]?.correct, false);
    }
}

function updateTimer(){
    timerEle.textContent = `⌛ ${timeLeft}`;
}


function selectAnswer(index , shouldScore){
    clearInterval(timer);
    const q = questions[currQuestion];
    const buttons = document.querySelectorAll(".option-btn")

    buttons.forEach(btn => btn.disabled = true);

    if(index === q.correct){
        shouldScore && score++;
        buttons[index].classList.add("correct");
    }else{
        buttons[index].classList.add("wrong");
        buttons[q.correct].classList.add("correct");
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", ()=>{
    currQuestion++;

    if(currQuestion < questions.length){
        loadQuestion();
    }else{
        showResult();
    }
})

function showResult(){
    nextBtn.style.display = "none";
    const highScore = Number(localStorage.getItem('quizHighScore')) || 0;

    const isNew = score > highScore;

    if(isNew){
        localStorage.setItem("quizHighScore", score);
    }

    resultEle.innerHTML = `
        <h2>Hurray!!! Quiz Completed </h2>
        <p> You have scored ${score} out of ${questions.length} questions </p>
        <p> Highest Score: ${Math.max(score , highScore)} </p>
        ${isNew ? "<p> Hey New High Score! </p>": ""}
        <button onclick="location.reload()">Restart Quiz</button>
    `
}

loadQuestion();
