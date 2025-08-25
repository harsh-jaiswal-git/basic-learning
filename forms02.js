const original = {
    q1: "Australia", 
    q2: "Sachin Tendulkar" , 
    q3: "Jacques Kallis" , 
    q4: "11" , 
    q5: "Leg Before Wicket"
};


const form = document.querySelector('form');
form.addEventListener('submit' , (event)=>{

    event.preventDefault();
    const data = new FormData(form);
    const answer = Array.from(data.values());
    
    // let result = 0;
    // for(let i=0;i<answer.length;i++){
    //     if(answer[i].trim()===original[i])
    //         result++;
    //     //  The issue you're experiencing (0 out of 5 is correct) even when 
    //     // some answers are correct, typically happens due to type mismatches 
    //     // or unexpected whitespace in the user input.so use...this - >[trim()]
    // }

    let result = 0;
    for(let [key,value] of data.entries())
    {
        if(value.trim()==original[key])
            result++;
    }
        
    const out = document.getElementById('out');
    out.innerHTML= `${result} out of 5 is correct`;

    
})