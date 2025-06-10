let mcqquestions = [
    {
        "question": "What does CPU stand for?",
        "options": ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Utility"]
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Venus"]
    },
    {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Rome"]
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "options": ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"]
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"]
    },
    {
        "question": "What is the largest mammal in the world?",
        "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"]
    },
    {
        "question": "What is H2O commonly known as?",
        "options": ["Salt", "Water", "Oxygen", "Hydrogen"]
    },
    {
        "question": "Which is the fastest land animal?",
        "options": ["Cheetah", "Lion", "Tiger", "Horse"]
    },
    {
        "question": "How many continents are there on Earth?",
        "options": ["5", "6", "7", "8"]
    },
    {
        "question": "Which language is used to create web pages?",
        "options": ["Python", "C++", "HTML", "Java"]
    }
];
let answers = [
    "Central Processing Unit",
    "Mars",
    "Paris",
    "Carbon Dioxide",
    "William Shakespeare",
    "Blue Whale",
    "Water",
    "Cheetah",
    "7",
    "HTML"
]

const question = document.querySelector("#question");
const options = document.querySelectorAll(".options");
const optionbtn = document.querySelectorAll(".form-check-input")
const btn = document.querySelector("#btn")

let indexcount = 0

function quiz(index) {
    question.textContent = "Q" + (index + 1) + "." + mcqquestions[index].question;
    options.forEach((op, i) => {
        op.textContent = mcqquestions[index].options[i];
    })
}


function checkquestion(index) {
    optionbtn.forEach((opbtn, i) => {
        if (opbtn.checked) {
            userans.push(mcqquestions[index].options[i])
        }
    })
}

function countscore(){
    for(let i =0;i<anslist.length;i++){
        if(anslist[i]==userans[i]){
            count++;
        }
    }
}
Score.textContent="score :"+ count +"/10"

btn.addEventListener('click',()=>{
    //ci =9
    if(currentindex <mcqquestions.length){
        checkquestion(currentindex);
        currentindex++;
    }
})



btn.addEventListener('click', () => {
    indexcount++;
    if (indexcount < mcqquestions.length) {
        quiz(indexcount);
    }
    else {
        indexcount = 0
        quiz(indexcount)
    }

});
quiz(indexcount);