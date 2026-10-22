//  const questions = [ 
//     { question: "Inside which HTML element do we put the JavaScript?", option1: "script", 
//         option2: "javascript",
//          option3: "js", 
//          correctOption: "script", }, 

//     { question: "Where is the correct place to insert a JavaScript?", option1: "The head section", 
//         option2: "The body section", 
//         option3: "Both the head and body section are correct", correctOption: "Both the head and body section are correct", }, 

//     { question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
//          option1: "script href=xxx.js",
//           option2: "script name=xxx.js", 
//           option3: "script src=xxx.js", 
//           correctOption: "script src=xxx.js", }, 
// ];
 
//  const main = document.querySelector("#maindiv")
//  const nextbutton = document.querySelector("#nextbtn")
//  const questioNo = 0;
 
 
// function allQuestion(){

// const main = document.querySelector("#maindiv");
// main.innerHTML = `<h1>${questioNo + 1 } :${questions[questioNo].question}</h1>
//  <label for="">
//     <input type="radio"  value="${questions[questioNo].option1}"   name="option">
// ${questions[questioNo].option1}

// </label>
// <br>
// <label for="">
//     <input type="radio"  value="${questions[questioNo].option2}"   name="option">

// ${questions[questioNo].option2}

// </label>
// <br>
// <label for="">
//     <input type="radio"  value="${questions[questioNo].option3}"   name="option">

// ${questions[questioNo].option3}

// </label>
//  `
// }
//     allQuestion()
 
//  if (questions !== questions.length){
//     nextbtn.disabled =true;
//    const inpute = document.querySelectorAll("input");
    
//    inpute.forEach((inpute) =>{
//     inpute.addEventListener("click",() =>{
//         nextbtn.disabled = false;
//     })
//    });
   
// }else{
// nextbtn.innerHTML = "Quize ended"
//  nextbtn.style.display = "none";
// }
   
//    nextbtn.addEventListener("click" ,()=>{
//  questioNo ++;
//     allQuestion();
// }) 


const questions = [ 
    { question: "Inside which HTML element do we put the JavaScript?", option1: "script", 
        option2: "javascript",
         option3: "js", 
         correctOption: "script", }, 

    { question: "Where is the correct place to insert a JavaScript?", option1: "The head section", 
        option2: "The body section", 
        option3: "Both the head and body section are correct", correctOption: "Both the head and body section are correct", }, 

    { question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
         option1: "script href=xxx.js",
          option2: "script name=xxx.js", 
          option3: "script src=xxx.js", 
          correctOption: "script src=xxx.js", }, 
];
 
 const main = document.querySelector("#maindiv")
 const nextbutton = document.querySelector("#nextbtn")
 let questioNo = 0;
 
 
function allQuestion(){
if (questions => questions.length){
    nextbtn.innerHTML = "Quize ended"
 nextbtn.style.display = "none";
 return;
}
const main = document.querySelector("#maindiv");
main.innerHTML = `<h1>${questioNo + 1 } :${questions[questioNo].question}</h1>
 <label for="">
    <input type="radio"  value="${questions[questioNo].option1}"   name="option">
${questions[questioNo].option1}

</label>
<br>
<label for="">
    <input type="radio"  value="${questions[questioNo].option2}"   name="option">

${questions[questioNo].option2}

</label>
<br>
<label for="">
    <input type="radio"  value="${questions[questioNo].option3}"   name="option">

${questions[questioNo].option3}

</label>
 `
 const inpute = document.querySelectorAll("input");
    
   inpute.forEach((inpute) =>{
    inpute.addEventListener("click",() =>{
        nextbtn.disabled = false;
    })
   });
}
 nextbtn.disabled =true;
    allQuestion()
 

   nextbtn.addEventListener("click" ,()=>{
 questioNo ++;
 nextbtn.disabled =true;
    allQuestion();
}) 
