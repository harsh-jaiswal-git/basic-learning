document.body.addEventListener("click",(event)=>{

    const circle = document.createElement("div");
    circle.className = "circle";

    circle.innerHTML = "";

    const x = event.clientX;
    const y = event.clientY;


    circle.style.left = `${x-25}px`
    circle.style.top = `${y-25}px`
    
   
    document.body.appendChild(circle);


    setTimeout(()=>{
        circle.remove();
    } , 5000)


    const color = ["red", "blue", "purple" , "green", "orange" , "yellow" , "pink" , "brown"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];





    
});



