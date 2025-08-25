// generate stars for depth
    const starsCon = document.getElementById('stars');
    for(let i=0;i<60;i++){
      const s = document.createElement('div');
      s.className='star';
      s.style.left = Math.random()*100 + '%';
      s.style.top = Math.random()*100 + '%';
      const size = 1 + Math.random()*3;
      s.style.width = size+'px'; s.style.height = size+'px';
      s.style.opacity = 0.3 + Math.random()*0.9;
      s.style.transform = `translateZ(${ -200 + Math.random()*800 }px)`;
      starsCon.appendChild(s);
    }

    // simple numerology-based life path number
    function lifePathNumber(day, month, year){
      const concat = String(day).padStart(2,'0') + String(month).padStart(2,'0') + String(year);
      let sum = 0;
      for(const ch of concat){ if(!isNaN(ch)) sum += Number(ch); }
      // reduce to 1-9
      while(sum > 9){
        let tmp = 0; while(sum>0){ tmp += sum%10; sum = Math.floor(sum/10); } sum = tmp;
      }
      if(sum === 0) sum = 9; return sum;
    }

    const messages = {
      1: ["Aaj se aap ek naye adhyay ki or badhenge — leadership aur nayi pahchaan milegi.", "Aapki mehnat aapko aage badhaegi, naye mauke nazar aayenge.", "Rishton me clarity aayegi, apne lakshya par dhyaan kendrit karein."],
      2: ["Aapka saath aur samvaad majboot hoga — team work se safalta milegi.", "Dil se judi choti khushiyan aapko din bhar muskurahte rahengi.", "Sahanubhuti aur samvedana aapko naye rishte de sakti hai."],
      3: ["Creativity aur bole-chal me aap chamkhenge — apne ideas share karein.", "Mauj-masti aur chhote safal prayog aapko bada reward denge.", "Public speaking ya expressive kaam me aap aage badhenge."],
      4: ["Discipline aur stability ka samay — apne routine aur financial planning theek karein.", "Samasyaon ko step-by-step hal karne se aap strong position me aayenge.", "Nivesh aur career me steady growth dikhai degi."],
      5: ["Badlav aur yatra ka sandesh — naye anubhav se aapki soch badlegi.", "Adventure aur risk lene se naye darwaze khul sakte hain.", "Communication aur learning se fayda hoga."] ,
      6: ["Parivaar aur zimmedariyon pe zor — ghar aur rishte aapke liye focus honge.", "Seva aur help karne se aapko emotional satisfaction milega.", "Creative projects jisse ghar ka support mile, aage badhenge."],
      7: ["Gehraai aur seekhne ka samay — aap research, study, aur self-work me interested rahenge.", "Intuition aapko sahi decisions lene me madad karegi.", "Kuch secret ya hidden opportunities saamne aa sakte hain."] ,
      8: ["Power aur material growth — career me bada mauka ya promotion possible hai.", "Financial rewards aur responsibility barhne ki sambhavna hai.", "Ambition aur strategy se target achieve hoga."] ,
      9: ["Completion aur generosity — koi chiz poori hogi, naye cycle ka aarambh hoga.", "Aapko creative ya humanitarian kaam me safalta milegi.", "Letting go karke aap fresh start le sakte hain."]  
    };

    function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

    const form = document.getElementById('astroForm');
    const resultBody = document.getElementById('resultBody');
    const tagOut = document.getElementById('tagOut');

    form.addEventListener('submit', function(e){
      e.preventDefault();
      const fname = document.getElementById('fname').value.trim();
      const sname = document.getElementById('sname').value.trim();
      const day = parseInt(document.getElementById('day').value);
      const month = parseInt(document.getElementById('month').value);
      const year = parseInt(document.getElementById('year').value);

      // basic validation
      if(!fname || !sname || !day || !month || !year){ alert('Sab fields sahi se bharein.'); return; }
      if(day<1 || day>31 || month<1 || month>12){ alert('Day/Month valid nahi hai.'); return; }

      // compute life path
      const lp = lifePathNumber(day,month,year);
      const mood = pickRandom(messages[lp]);

      // build a small creative result using name
      const greetings = ['Shubh prabhat','Namaste','Hello'];
      const greet = greetings[Math.floor(Math.random()*greetings.length)];

      // time-based flavour
      const nowHour = new Date().getHours();
      let timePhrase = 'Aaj';
      if(nowHour < 12) timePhrase = 'Is subah'; else if(nowHour < 17) timePhrase = 'Aaj dopahar'; else timePhrase = 'Aaj shaam';

      const finalText = `${greet} ${fname} ${sname} — ${timePhrase} aapke sitare keh rahe hain: ${mood} \n\nSankhya (Life Path): ${lp}. Yeh sankhya aapki strength aur direction dikhati hai.`;

      // show with small animation
      resultBody.style.opacity = 0; resultBody.style.transform = 'translateY(8px)';
      setTimeout(()=>{
        resultBody.textContent = finalText; resultBody.style.opacity = 1; resultBody.style.transform = 'translateY(0)';
        tagOut.textContent = 'Life Path: ' + lp;
      },300);

      // add little planet bounce
      const planet = document.querySelector('.planet');
      planet.animate([
        { transform: 'rotateY(0) scale(1)' },
        { transform: 'rotateY(40deg) scale(1.06)' },
        { transform: 'rotateY(0) scale(1)' }
      ],{duration:900, easing:'ease-out'});

    });

    // small theme tilt following pointer (3d feel)
    const stage = document.querySelector('.stage');
    stage.addEventListener('mousemove', (e)=>{
      const r = stage.getBoundingClientRect();
      const cx = r.left + r.width/2; const cy = r.top + r.height/2;
      const dx = (e.clientX - cx)/r.width; const dy = (e.clientY - cy)/r.height;
      stage.style.transform = `rotateY(${dx*6}deg) rotateX(${ -dy*5 }deg)`;
    });
    stage.addEventListener('mouseleave', ()=>{ stage.style.transform = `rotateY(0deg) rotateX(0deg)`; });