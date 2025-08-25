//  // generate a basic insight based on dob   

// //  based on month 
//     const ZODIACS = [
//         "Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Scorpio","Sagittarius"
// ];



// // size 31  bases on date
//     const compliments = [
//   "You have a contagious smile.",
//   "Your positivity is inspiring.",
//   "You bring out the best in people.",
//   "Your presence brightens the room.",
//   "You are wonderfully creative.",
//   "You have an amazing sense of humor.",
//   "You make difficult things look easy.",
//   "You have a heart of gold.",
//   "You are a great listener.",
//   "Your determination is admirable.",
//   "You are full of brilliant ideas.",
//   "You are incredibly thoughtful.",
//   "You have a beautiful way with words.",
//   "You make people feel valued.",
//   "You have a unique perspective.",
//   "Your kindness is unmatched.",
//   "You’re a true problem solver.",
//   "You are so supportive and caring.",
//   "Your enthusiasm is infectious.",
//   "You inspire confidence in others.",
//   "You have a gift for making others smile.",
//   "You radiate positivity.",
//   "You make the world a better place.",
//   "You are wise beyond your years.",
//   "You are full of courage.",
//   "You have an admirable work ethic.",
//   "You are refreshingly honest.",
//   "You have a calming presence.",
//   "You are incredibly resourceful.",
//   "You always find the silver lining.",
//   "You’re one of a kind."
// ];


// // size 20 
// const victimCardCompliments = [
//   "You always put others first, even when no one notices.",
//   "You give without expecting anything in return.",
//   "Your kindness often goes unrecognized, but it’s priceless.",
//   "You help everyone, even when you need help yourself.",
//   "You always stand by people, even if they don’t do the same for you.",
//   "You forgive easily, even when you’ve been hurt.",
//   "You keep giving chances, even when others waste them.",
//   "You sacrifice your comfort to make others happy.",
//   "You support people, even when they forget you later.",
//   "You understand everyone, but few understand you.",
//   "You show up for people, even when they disappear on you.",
//   "You smile, even when you’re hurting inside.",
//   "You listen to everyone, but rarely get heard yourself.",
//   "You believe in people, even when they doubt you.",
//   "You stay loyal, even when loyalty isn’t returned.",
//   "You love deeply, even when it’s not appreciated.",
//   "You care too much, even when people take it for granted.",
//   "You give your time to others, even when you have none to spare.",
//   "You stand strong for others, even when you feel weak.",
//   "You always try to make peace, even when you’re not at fault."
// ];

// // size is 30
// const lifeRecommendations = [
//   "Feed a street dog or cat.",
//   "Plant a tree and take care of it.",
//   "Call a friend you haven’t spoken to in a while.",
//   "Write down three things you’re grateful for today.",
//   "Smile at a stranger.",
//   "Donate clothes you no longer wear.",
//   "Help someone carry their bags.",
//   "Compliment someone sincerely.",
//   "Drink more water today.",
//   "Take a 15-minute walk in nature.",
//   "Read at least 5 pages of a good book.",
//   "Spend an evening without screens.",
//   "Cook a healthy meal for yourself or someone else.",
//   "Say ‘thank you’ to someone you often forget to thank.",
//   "Do one thing that scares you (in a good way).",
//   "Wake up 30 minutes earlier and enjoy the quiet.",
//   "Organize one small corner of your home.",
//   "Write a positive note and leave it for someone to find.",
//   "Help a colleague or classmate with their work.",
//   "Meditate for 10 minutes.",
//   "Spend quality time with a family member.",
//   "Listen to uplifting music.",
//   "Give genuine appreciation to someone’s effort.",
//   "Support a local business.",
//   "Avoid complaining for the whole day.",
//   "Watch the sunrise or sunset.",
//   "Pray or practice mindfulness.",
//   "Keep your phone away during meals.",
//   "Recycle something instead of throwing it away.",
//   "Give food or water to birds."
// ];


// // size is 20 
// const futurePredictions = [
//   "You will become a crorepati one day.",
//   "A life-changing opportunity will soon knock on your door.",
//   "You will travel to your dream destination.",
//   "Your hard work will bring you unexpected rewards.",
//   "A new friendship will bring joy into your life.",
//   "You will soon receive exciting news.",
//   "Your hidden talent will be recognized by others.",
//   "A big success is waiting just around the corner.",
//   "You will soon meet someone who will change your life.",
//   "Your financial situation will improve dramatically.",
//   "You will achieve something you once thought was impossible.",
//   "Happiness will find its way to you very soon.",
//   "You will soon buy something you have always wanted.",
//   "Your dream home will become a reality.",
//   "You will soon celebrate a major personal achievement.",
//   "You will be blessed with good health and energy.",
//   "Your kindness will come back to you in beautiful ways.",
//   "You will soon receive a gift from an unexpected person.",
//   "A dream from your childhood will finally come true.",
//   "You will inspire others with your success story."
// ];


 // zodiac lookup by month/day (sun-sign)
    const ZODIACS = [
      {name:'Capricorn', start:[12,22], end:[1,19], sym:'♑', blurb:'Practical, steady and ambitious. This week focus on small wins that build momentum.'},
      {name:'Aquarius', start:[1,20], end:[2,18], sym:'♒', blurb:'Innovative and friendly. New connections will bring unexpected inspiration.'},
      {name:'Pisces', start:[2,19], end:[3,20], sym:'♓', blurb:'Compassionate dreamer. Allow time for rest; creativity will follow.'},
      {name:'Aries', start:[3,21], end:[4,19], sym:'♈', blurb:'Bold and energetic. Take the lead on something you care about.'},
      {name:'Taurus', start:[4,20], end:[5,20], sym:'♉', blurb:'Grounded and patient. A steady plan will pay off—invest time in details.'},
      {name:'Gemini', start:[5,21], end:[6,20], sym:'♊', blurb:'Curious and quick. A conversation could open a practical opportunity.'},
      {name:'Cancer', start:[6,21], end:[7,22], sym:'♋', blurb:'Nurturing energy. Focus on home and relationships; small kindnesses matter.'},
      {name:'Leo', start:[7,23], end:[8,22], sym:'♌', blurb:'Warm and confident. Step into the spotlight—your energy attracts allies.'},
      {name:'Virgo', start:[8,23], end:[9,22], sym:'♍', blurb:'Analytical and helpful. Organising will clear space for creativity.'},
      {name:'Libra', start:[9,23], end:[10,22], sym:'♎', blurb:'Harmonious and fair. Balance work and joy for best results.'},
      {name:'Scorpio', start:[10,23], end:[11,21], sym:'♏', blurb:'Intense and focused. Channel your determination into one clear goal.'},
      {name:'Sagittarius', start:[11,22], end:[12,21], sym:'♐', blurb:'Adventurous and optimistic. Plan a short adventure or try something new.'}
    ];

    function getZodiac(day, month){
      // month 1-12
      for(const z of ZODIACS){
        const [sM,sD] = z.start; const [eM,eD] = z.end;
        if((month===sM && day>=sD) || (month===eM && day<=eD) || (sM<eM && month> sM && month< eM) || (sM>eM && (month> sM || month< eM))){
          return z;
        }
      }
      return null;
    }

    const form = document.getElementById('astroForm');
    const symbolEl = document.getElementById('symbol');
    const signName = document.getElementById('signName');
    const rangeEl = document.getElementById('range');
    const desc = document.getElementById('desc');
    const chips = document.getElementById('chips');
    const fullName = document.getElementById('fullName');
    const shareBtn = document.getElementById('shareBtn');

    form.addEventListener('submit', e=>{
      e.preventDefault();
      const fname = form.fname.value.trim();
      const lname = form.lname.value.trim();
      const day = parseInt(form.day.value,10);
      const month = parseInt(form.month.value,10);
      const year = parseInt(form.year.value,10);

      // simple validation
      if(!fname || !lname || isNaN(day) || isNaN(month) || isNaN(year)) return alert('Please fill all fields correctly.');
      if(day<1||day>31) return alert('Day must be 1-31');

      // adjust for month-specific days (basic)
      const monthDays = [31, ( (year%4===0 && year%100!==0) || year%400===0)?29:28,31,30,31,30,31,31,30,31,30,31];
      if(day>monthDays[month-1]) return alert('Invalid day for the selected month/year.');

      const z = getZodiac(day, month) || {name:'Unknown', sym:'—', blurb:'No reading available.'};

      // display
      symbolEl.textContent = z.sym;
      signName.textContent = z.name;
      rangeEl.textContent = `${z.start[0]}/${String(z.start[1]).padStart(2,'0')} — ${z.end[0]}/${String(z.end[1]).padStart(2,'0')}`;
      desc.textContent = `${fname}, ${z.blurb} Small action today creates momentum — be kind to yourself.`;

      // smart chips (personality + lucky suggestions)
      chips.innerHTML = '';
      const traits = ['Creative','Focused','Kind','Curious','Ambitious','Grounded','Adventurous'];
      const picks = shuffle(traits).slice(0,3);
      for(const p of picks){ const d=document.createElement('div'); d.className='chip'; d.textContent=p; chips.appendChild(d);} 

      fullName.textContent = `${fname} ${lname} • Born ${String(day).padStart(2,'0')}/${String(month).padStart(2,'0')}/${year}`;

      // small glow animation
      animateReveal();
    });

    shareBtn.addEventListener('click', ()=>{
      const text = `${signName.textContent} — ${desc.textContent} \n${fullName.textContent}`;
      navigator.clipboard?.writeText(text).then(()=>{
        shareBtn.textContent='Copied!'; setTimeout(()=>shareBtn.textContent='Copy reading',1500);
      }).catch(()=>{alert('Copy failed — your browser may not allow clipboard write.');});
    });

    function shuffle(arr){
      const a = arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a;
    }

    function animateReveal(){
      const r = document.getElementById('result');
      r.style.transform='translateY(6px)'; r.style.transition='transform 160ms';
      setTimeout(()=>{r.style.transform='translateY(0)';},160);
    }

    // small accessibility: submit on enter inside any input
    ['fname','lname','day','month','year'].forEach(id=>document.getElementById(id).addEventListener('keypress', e=>{ if(e.key==='Enter'){ form.dispatchEvent(new Event('submit',{cancelable:true})) }}));