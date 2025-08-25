const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "The best way to predict your future is to create it. – Abraham Lincoln",
    "Not all those who wander are lost. – J.R.R. Tolkien",
    "Fall seven times, stand up eight. – Japanese Proverb",
    "If you want to go fast, go alone. If you want to go far, go together. – African Proverb",
    "Dream big and dare to fail. – Norman Vaughan",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "You don’t have to see the whole staircase, just take the first step. – Martin Luther King Jr.",
    "A smooth sea never made a skilled sailor. – Franklin D. Roosevelt",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Love is not about possession. Love is about appreciation. – Osho"
  ];






function quoteGenerate(){

const element = document.getElementById("quote");
const index = Math.floor(Math.random()*quotes.length);
element.innerHTML = quotes[index];

}


setInterval(quoteGenerate, 2000);


    
