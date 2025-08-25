

const root = document.getElementById("root");
root.addEventListener("click",(event)=>{
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor= event.target.id;
},false)
// ye false bs aise hii backchodi krne ke liye likhe hai...jruri ny hai...kyuki bydefault 
// bubbling hii hota hai..ny bhi likhoge to bhi chlega....







