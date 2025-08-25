const form= document.querySelector('form');
form.addEventListener('button',(event)=>{

    event.preventDefault();

    const first = document.getElementById('first');
    console.log(first.value);
    

})