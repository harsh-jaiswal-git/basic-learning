const cricketQuestions = [
  {
    question: "Who has scored the most centuries in international cricket?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Brian Lara"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ICC Cricket World Cup in 1975?",
    options: ["India", "Australia", "West Indies", "England"],
    correctAnswer: "West Indies"
  },
  {
    question: "What is the maximum number of overs allowed per bowler in a T20 match?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4"
  },
  {
    question: "Which cricketer is known as 'The Wall'?",
    options: ["Sourav Ganguly", "Rahul Dravid", "Anil Kumble", "Virat Kohli"],
    correctAnswer: "Rahul Dravid"
  },
  {
    question: "Who won the 2011 ICC Cricket World Cup?",
    options: ["India", "Sri Lanka", "Australia", "Pakistan"],
    correctAnswer: "India"
  },
  {
    question: "Which bowler has the most wickets in Test cricket?",
    options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"],
    correctAnswer: "Muttiah Muralitharan"
  },
  {
    question: "What does LBW stand for in cricket?",
    options: ["Leg Before Wicket", "Left Behind Wicket", "Long Ball Win", "Leg Batting Wide"],
    correctAnswer: "Leg Before Wicket"
  },
  {
    question: "Who was the first Indian to score a triple century in Test cricket?",
    options: ["Virender Sehwag", "Sunil Gavaskar", "Sachin Tendulkar", "VVS Laxman"],
    correctAnswer: "Virender Sehwag"
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11"
  },
  {
    question: "Which Indian player is known as 'Captain Cool'?",
    options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Kapil Dev"],
    correctAnswer: "MS Dhoni"
  },
  {
    question: "Who hit six sixes in an over in T20 World Cup 2007?",
    options: ["Rohit Sharma", "Yuvraj Singh", "Suresh Raina", "Hardik Pandya"],
    correctAnswer: "Yuvraj Singh"
  },
  {
    question: "Which cricket ground is known as the 'Home of Cricket'?",
    options: ["MCG", "Lords", "Eden Gardens", "Old Trafford"],
    correctAnswer: "Lords"
  },
  {
    question: "Which cricketer is nicknamed 'Boom Boom'?",
    options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Andre Russell"],
    correctAnswer: "Shahid Afridi"
  },
  {
    question: "How many runs are awarded for a no-ball in ODI?",
    options: ["0", "1", "2", "5"],
    correctAnswer: "1"
  },
  {
    question: "Which country hosted the 2019 ICC World Cup?",
    options: ["India", "England", "Australia", "South Africa"],
    correctAnswer: "England"
  },
  {
    question: "Who was the first bowler to take 10 wickets in a Test innings?",
    options: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Shane Warne"],
    correctAnswer: "Jim Laker"
  },
  {
    question: "What is the term for 3 wickets in 3 consecutive balls?",
    options: ["Triple Hit", "Hat-trick", "Treble", "Wicket Chain"],
    correctAnswer: "Hat-trick"
  },
  {
    question: "Who is the first Indian woman cricketer to score a double century in ODIs?",
    options: ["Harmanpreet Kaur", "Mithali Raj", "Smriti Mandhana", "None"],
    correctAnswer: "None" 
  },
  {
    question: "Which format of cricket is played over 5 days?",
    options: ["ODI", "T10", "T20", "Test"],
    correctAnswer: "Test"
  },
  {
    question: "Who holds the record for the fastest century in ODI cricket?",
    options: ["Virat Kohli", "Corey Anderson", "AB de Villiers", "Sanath Jayasuriya"],
    correctAnswer: "AB de Villiers"
  }
];


// select 5 random question 
function randomQuestion(){

 
  const data = new Set();
  // Set kya hota hai?
  // Set JavaScript ka ek special object hota hai jisme sirf unique values store hoti hain.
  // Matlab agar tum same value 2 baar add() karne ki koshish karoge, to wo sirf ek baar hi store hoga

  while(data.size!=5){
//      Yeh while loop tab tak chalega jab tak data set ke andar 5 unique elements nahi ho jaate.
//      data.size ka matlab hai: kitni values data set ke andar hain.
//      Jaise hi 5 unique question select ho jaate hain, loop ruk jaata hai
    const index = Math.floor(Math.random()*20);
    data.add(cricketQuestions[index]);

    
  }
  //  convet set into array : using spread operator;
  return [...data];
}


// select the form and insert all the element into it 

const form  = document.querySelector('form');


const problem = randomQuestion();

const original = {};





problem.forEach((obj,index)=>{

  // select the form 
  const div_element = document.createElement('div');
  div_element.className = 'question';
  original[`q${index+1}`]= obj['answer'];
   

  const para = document.createElement('p');
  para.textContent = `${index+1}. ${obj['question']}`;
  div_element.appendChild(para);


})


// create 4 options 

  obj['option'].forEach((data)=>{

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${index+1}`;
    input.value = data;
    label.appendChild(input); 
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));

  })

  form.appendChild(div_element);
  




const button = document.createElement('button');
button.type = 'submit';
button.textContent = "submit";
button.className = 'submit-btn';

form.appendChild(button);



// check the submited form;




form.addEventListener('submit' , (event)=>{

    event.preventDefault();
    const data = new FormData(form);
    const answer = Array.from(data.values());
    

    let result = 0;
    for(let [key,value] of data.entries())
    {
        if(value.trim()==original[key])
            result++;
    }
        
    const out = document.getElementById('out');
    out.innerHTML= `${result} out of 5 is correct`;

    
})