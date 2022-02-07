const quizQ=[       //-------------->1step
    {
        question:"Q1: Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d"
    },
    {
        question:"Q2: What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question:"Q3:What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question:"Q4:What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    }
]
//--------------------------2nd step-----------------------//
    let q=document.getElementById("question");
    let a1=document.getElementById("ans1");
    let a2=document.getElementById("ans2");
    let a3=document.getElementById("ans3");
    let a4=document.getElementById("ans4");
    let sub=document.getElementById("submit");
    let answers=document.querySelectorAll(".answer");
    let scr=document.getElementById("showScore");


//---------------------------3rd step-----------------------//
    let qCount=0;
    let score=0;//--5th step

let loadQ=()=>{
    let qList=quizQ[qCount];
    q.innerHTML=qList.question;
    a1.innerHTML=qList.a;
    a2.innerHTML=qList.b;
    a3.innerHTML=qList.c;
    a4.innerHTML=qList.d;
}
loadQ();


//-------------------4th step------------------------------//
sub.addEventListener('click',()=>{
    let checked=getChecked();
    console.log(checked);
    //--------------------------5th step---------------//
    if(checked === quizQ[qCount].correct){
        score++;
        console.log(score);
    }
    
    qCount++;
    //----------------------7th step------- uncheck------------------//
    let deselectAll=()=>{
        answers.forEach((currAnswer) => currAnswer.checked = false);
    }
    deselectAll();

//------------------------6th step---------------//

    if(qCount < quizQ.length){
        loadQ();
    }else{
        scr.innerHTML = `
            <h1>You Have Scored: ${score}/${quizQ.length}</h1>
            <button class="btn" onclick="location.reload()">Restart</button>
        `;
    }

})
let getChecked = ()=>{
    let answer;

    answers.forEach((currAnswer) => {
        if(currAnswer.checked){
            answer=currAnswer.id;
        }
    })
    return answer;
};


//----------------------7th step------- uncheck------------------//

