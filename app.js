
const questions = [ 
    { 
        question: "Inside which HTML element do we put the JavaScript?", 
        option1: "script", 
        option2: "javascript", 
        option3: "js", 
        correctOption: "script" 
    }, 
    { 
        question: "Where is the correct place to insert a JavaScript?", 
        option1: "The head section", 
        option2: "The body section", 
        option3: "Both the head and body section are correct", 
        correctOption: "Both the head and body section are correct" 
    }, 
    { 
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?', 
        option1: "script href=xxx.js", 
        option2: "script name=xxx.js", 
        option3: "script src=xxx.js", 
        correctOption: "script src=xxx.js" 
    }
];
 
const main = document.querySelector("#maindiv");
const nextbtn = document.querySelector("#nextbtn");

let questioNo = 0;
let score = 0;
let selectedOption = "";

function allQuestion(){
  main.innerHTML = `
      <h5 class="text-muted mb-3">Question ${questioNo + 1} of ${questions.length}</h5>
      <h3 class="fw-bold mb-4 text-dark">${questions[questioNo].question}</h3>
      
      <div class="d-grid gap-3 mb-3">
         <label class="p-3 border rounded-3 bg-light shadow-sm d-flex align-items-center cursor-pointer">
            <input type="radio" value="${questions[questioNo].option1}" name="option" class="form-check-input me-3 mt-0">
            <span class="fs-6 fw-medium">${questions[questioNo].option1}</span>
         </label>

         <label class="p-3 border rounded-3 bg-light shadow-sm d-flex align-items-center cursor-pointer">
            <input type="radio" value="${questions[questioNo].option2}" name="option" class="form-check-input me-3 mt-0">
            <span class="fs-6 fw-medium">${questions[questioNo].option2}</span>
         </label>

         <label class="p-3 border rounded-3 bg-light shadow-sm d-flex align-items-center cursor-pointer">
            <input type="radio" value="${questions[questioNo].option3}" name="option" class="form-check-input me-3 mt-0">
            <span class="fs-6 fw-medium">${questions[questioNo].option3}</span>
         </label>
      </div>`;
   
   // show input button and saving the value
   const inputs = document.querySelectorAll("input");
   inputs.forEach((input) => {
      input.addEventListener("click", (e) => {
         selectedOption = e.target.value; 
         nextbtn.disabled = false;        
      });
   });
}

// keep button disable
nextbtn.disabled = true;
allQuestion();

// checking scorce
nextbtn.addEventListener("click", () => {
   if (selectedOption === questions[questioNo].correctOption) {
      score++;
   }

   questioNo++; 

   if (questioNo >= questions.length) {
      nextbtn.style.display = "none";
      main.innerHTML = `
         <div class="text-center p-4">
            <h2 class="fw-bold text-success">Quiz Finished! </h2>
            <h4 class="mt-3 text-dark">Aapka Score: <span class="text-primary">${score}</span> / ${questions.length}</h4>
         </div>`;
      return;
   }

   nextbtn.disabled = true;
   allQuestion();
});

   