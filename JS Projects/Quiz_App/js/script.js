const questions = [
{
    'que':'What one of these is a Markup Language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
},
{
    'que':'Which year Javacript was launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
},
{
    'que':'What does CSS stand for?',
    'a':'Hyper Text Markup Language ',
    'b':'Cascading Style Sheet',
    'c':'JSON Object Notation',
    'd':'Helicopters Terminals Motorboats Lamborginis',
    'correct':'b'
}

]

let index = 0;
let total = questions.length;
let right=0;
let wrong = 0;
const optionInputs= document.querySelectorAll(".options")
const quesBox = document.getElementById("quesBox")
const loadQuestion = ()=>{
    if(index === total){
return endQuiz();
    }
    else{
    reset();}
const data = questions[index]
quesBox.innerText = ` ${index+1})   ${data.que}`;
optionInputs[0].nextElementSibling.innerText= `${data.a}`
optionInputs[1].nextElementSibling.innerText= `${data.b}`
optionInputs[2].nextElementSibling.innerText= `${data.c}`
optionInputs[3].nextElementSibling.innerText= `${data.d}`

}



const submitQuiz = ()=>{
 const data = questions[index]
const ans = getAnswer();
if(ans == data.correct){
    right++;
}
else{
    wrong++
}
index++
loadQuestion()

return;

}



const getAnswer= ()=>{
    let answer;
optionInputs.forEach(
    
    
    (input) => {
    if(input.checked){
        console.log("yes")
        answer =  input.value;
    }
 

}
   
)
return answer;

}

const reset = ()=>{

    optionInputs.forEach((input) => {
       input.checked = false;
        }    
    );

}


const endQuiz = ()=>{
    document.getElementById("box").innerHTML=  `
    <div style = "text-align:center;">
    <h3>Thank You For Playing The Quiz </h3>
    <h2>${right}/${total} Are Correct</h2>
    <h2>${wrong}/${total} Are Wrong</h2>
    </div>
    
    `

}






loadQuestion()