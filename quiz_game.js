const questions = [
    {
        question: "Sino ang pambansang bayani ng pilipinas?",
        answers: [
            {text: "Jose rizal", correct: true},
            {text: "Andres Bonifacio", correct: false},
            {text: "Juan Luna", correct: false},
            {text: "Antonio Luna", correct: false},

        ]
    },
    {
        question: "Ano ang pambansang dahon ng pilipinas?",
        answers: [
            {text: "Bayabas", correct: false},
            {text: "Anahaw", correct: true},
            {text: "Dahon-pula", correct: false},
            {text: "Dama de noche", correct: false}


        ]
    },
    {
        question: "Pambansang laro ng pilipinas?",
        answers: [
            {text: "luksong Lubid", correct: false},
            {text: "Patintero", correct: false},
            {text: "Trumpo", correct: true},
            {text: "Tumbang preso", correct: false},
        ]
    },
    {
        question: "Ano ang pambansang puno ng pilipinas?",
        answers: [
            {text: "Puno ng Buko", correct: false},
            {text: "Narra", correct: true},
            {text: "Madre de cacao", correct: false},
            {text: "Akasiya", correct: false}


        ]
    },
    {
        question: "Sino ang unang pangulo ng Pilipinas?",
        answers: [
            {text: " Emilio Aguinaldo", correct: true},
            {text: "Manuel L. Quezon", correct: false},
            {text: "Ferdinand Marcos", correct: false},
            {text: "Rodrigo Duterte", correct: false}
        ]
    },
    {
        question: "Ilang isla meron ang pilipinas?",
        answers: [
            {text: " 7,567", correct: false},
            {text: "1,546", correct: false},
            {text: "7,642", correct: false},
            {text: "7,641", correct: true}
        ]
    },
    {
        question: "Sino ang pinakakilalang propetang muslim?",
        answers: [
            {text: " Muhammad", correct: true},
            {text: "Ali", correct:false},
            {text: "Ibrahim", correct: false},
            {text: "Abdullah", correct: false}
        ]
    },
    {
        question: "Ano ang pambansang ibon?",
        answers: [
            {text: "Maya", correct: false},
            {text: "Gorion", correct: false},
            {text: "Agila", correct: true},
            {text: "Tweety Bird", correct: false}
        ]
    },
    {
        question: "Kailan ang araw ng mga bayani?",
        answers: [
            {text: "Agosto 27", correct: false},
            {text: "Agosto 30", correct: false},
            {text: "agosto 26", correct: true},
            {text: "novembre 26", correct: false}
        ]
    },
    {
        question: "Pambansang bulaklak",
        answers: [
            {text: "Bugambilya", correct: false},
            {text: "Sampanguita", correct: true},
            {text: "Santan", correct: false},
            {text: "Rosas", correct: false}
        ]
    },
    {
        question: "Which animals lays eggs?",
        answers: [
            {text: "Duck", correct: true},
            {text: "Dog", correct: false},
            {text: "Cat", correct: false},
            {text: "Sheep", correct: false},

        ]
    },
    {
        question: "A male cow is called?",
        answers: [
            {text: "Monkey", correct: false},
            {text: "Sheep", correct: false},
            {text: "ox", correct: true},
            {text: "Dog", correct: false},

        ]
    },
    {
        question: "What part of the body helps you move?",
        answers: [
            {text: "Pancreas", correct: false},
            {text: "Legs", correct: false},
            {text: "Muscles", correct: true},
            {text: "Lungs", correct: false},

        ]
    },
    {
        question: "The two holes of the nose are called?",
        answers: [
            {text: "Nostrills", correct: true},
            {text: "Nails", correct: false},
            {text: "Hair", correct: false},
            {text: "Eyelids", correct: false},

        ]
    },
    {
        question: "Legs have feet and arms have_?",
        answers: [
            {text: "Ankles", correct: false},
            {text: "Veins", correct: false},
            {text: "Hands", correct: true},
            {text: "bone", correct: false},

        ]
    },
    {
        question: "Who invented the first functional telephone?",
        answers: [
            {text: "Albert Einstein", correct: false},
            {text: "Nicola Tesla", correct: false},
            {text: "Thomas Alva Edison", correct: false},
            {text: "Alexander Graham Bell", correct: true},

        ]
    },
    {
        question: "Your hands have four fingers and a _?",
        answers: [
            {text: "Knee", correct: false},
            {text: "Ankle", correct: false},
            {text: "Elbow", correct: false},
            {text: "Thumb", correct: true},

        ]
    },
    {
        question: "Animals that suckle their young one are called?",
        answers: [
            {text: "Reptiles", correct: false},
            {text: "Birds", correct: false},
            {text: "Mammals", correct: true},
            {text: "Amphibians", correct: false},

        ]
    },
    {
        question: "Which is the largest land animal?",
        answers: [
            {text: "Elephant", correct: true},
            {text: "Tiger", correct: false},
            {text: "Lion", correct: false},
            {text: "Rhinoceros", correct: false},

        ]
    },
    {
        question: "_ helps pump blood through the entire body.",
        answers: [
            {text: "Lungs", correct: false},
            {text: "Kidneys", correct: false},
            {text: "Heart", correct: false},
            {text: "Brain", correct: true},

        ]
    },
    {
        question: "Add 8.563 and 4.8292.",
        answers: [
            {text: "13.6784", correct: false},
            {text: "13.3922", correct: true},
        ]
    },
    {
        question: "What is 1.92 divided by 3?",
        answers: [
            {text: "3.28", correct: false},
            {text: "0.64", correct: true},
        ]
    },
    {
        question: "Whos is the father of Mathematics?",
        answers: [
            {text: "Aryabhatta", correct: false},
            {text: "Archimedes", correct: true},
        ]
    },
    {
        question: "Value of cos 360 degrees?",
        answers: [
            {text: "1", correct: true},
            {text: "3.14", correct: false},
        ]
    },
    {
        question: "What symbol is used to symbolise percentage?",
        answers: [
            {text: "*", correct: false},
            {text: "%", correct: true},
        ]
    },
    {
        question: "If we minus 712 from 1500,how much do we get?",
        answers: [
            {text: "788", correct: true},
            {text: "768", correct:false},
            {text: "758", correct:false},
            
        ]
        
    },
    {
        question: "What is the sum of 130 + 125 + 191?",
        answers: [
            {text: "335", correct: false},
            {text: "456", correct:false},
            {text: "446", correct:true},
            
        ]
    },
    {
        question: "What is the value of Pi?",
        answers: [
            {text: "3.14159", correct: true},
            {text: "3.14743", correct:false},
            {text: "1.32", correct:false},
            
        ]
    },
    {
        question: "Who invented protractor?",
        answers: [
            {text: "Joseph Arthur", correct:false},
            {text: "Joseph Huddart", correct:true},
        ]
    },
    {
        question: "Who discovered Graph Theory",
        answers: [
            {text: "Leonhard Euler", correct: true},
            {text: "George Boole", correct:false},
            
        ]
    },
    

];
// functions//

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function start(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";

    while(answerButtons. firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
   
}


    function showScore(){
        resetState();
    
    let scoreDisplay = document.createElement("h2");
    scoreDisplay.textContent = `Your score is ${score} out of ${questions.length}!`;
    questionElement.appendChild(scoreDisplay);

    let nextButton = document.createElement("button");
    nextButton.innerHTML = "Play Again";
    nextButton.classList.add("btn");
    nextButton.addEventListener("click", start);
    questionElement.appendChild(nextButton);
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        start();
    }
})

start();

