/* FLOß Grammatik – Quiz-Engine */
(function(){
  const D = window.LEVEL_DATA;
  if(!D) return;
  document.title = "Deutsch " + D.level + " – FLOß Grammatik";

  const hero = document.getElementById("lvl-hero");
  hero.innerHTML = '<span class="badge" style="background:'+D.color+'">'+D.level+'</span>'+
    '<h1>'+D.title+'</h1><p>'+D.subtitle+'<br><span class="en">'+D.subtitleEn+'</span></p>';

  const bar = document.getElementById("chipbar");
  bar.innerHTML = D.topics.map(t=>'<a href="#'+t.id+'">'+t.chip+'</a>').join("");

  const root = document.getElementById("topics");
  root.innerHTML = D.topics.map(t=>{
    const merk = t.merk ? '<div class="merk"><b>Merke:</b> '+t.merk+(t.merkEn?'<br><span class="en">'+t.merkEn+'</span>':'')+'</div>' : '';
    const hasQ = t.q && t.q.length;
    const badge = hasQ ? '' : '<span class="ref-badge">Nachschlagen · reference</span>';
    const quiz = hasQ
      ? '<div class="quiz" data-tid="'+t.id+'">'+
        '<div class="quiz-head"><h3>Übung <span class="en">· exercise</span></h3>'+
        '<span class="score" id="score-'+t.id+'">0 / '+t.q.length+'</span></div>'+
        t.q.map((q,i)=>renderQ(t.id,q,i)).join("")+'</div>'
      : '';
    return '<section class="topic" id="'+t.id+'">'+
      '<h2>'+t.title+badge+'</h2><p class="ten">'+t.titleEn+'</p>'+
      '<div class="card">'+t.explain+merk+'</div>'+quiz+'</section>';
  }).join("");

  function renderQ(tid,q,i){
    const qid = tid+"-"+i;
    if(q.type==="gap"){
      return '<div class="q" id="q-'+qid+'"><p class="qtext">'+q.q+'</p>'+
        '<div class="gapline"><input type="text" id="in-'+qid+'" placeholder="…" autocomplete="off" autocapitalize="off">'+
        '<button onclick="window._chkGap(\''+tid+'\','+i+')">Prüfen</button></div>'+
        '<p class="fb" id="fb-'+qid+'"></p></div>';
    }
    const opts = q.o.map((o,j)=>'<button onclick="window._chkMC(\''+tid+'\','+i+','+j+',this)">'+o+'</button>').join("");
    return '<div class="q" id="q-'+qid+'"><p class="qtext">'+q.q+'</p><div class="opts">'+opts+'</div>'+
      '<p class="fb" id="fb-'+qid+'"></p></div>';
  }

  const state = {};
  D.topics.forEach(t=>{ if(t.q && t.q.length) state[t.id] = {done:{}, right:0, total:t.q.length}; });

  function topic(tid){ return D.topics.find(t=>t.id===tid); }
  function updScore(tid){
    const s = state[tid];
    const el = document.getElementById("score-"+tid);
    el.textContent = s.right+" / "+s.total;
    if(Object.keys(s.done).length===s.total){
      const pct = s.right/s.total;
      el.style.background = pct>=0.8 ? "#e8fbee" : (pct>=0.5 ? "#fff8e6" : "#ffecea");
      el.style.color = pct>=0.8 ? "#1a7a3a" : (pct>=0.5 ? "#9a7b00" : "#c22");
      el.textContent = s.right+" / "+s.total+(pct>=0.8?"  ·  Sehr gut!":(pct>=0.5?"  ·  Weiter üben!":"  ·  Nochmal lesen!"));
    }
  }
  function feedback(qid, good, hint){
    const fb = document.getElementById("fb-"+qid);
    fb.className = "fb show "+(good?"good":"bad");
    fb.innerHTML = (good?"Richtig! ":"")+(hint||"");
  }

  window._chkMC = function(tid,i,j,btn){
    const s = state[tid]; if(s.done[i]!==undefined) return;
    const q = topic(tid).q[i];
    const qid = tid+"-"+i;
    const buttons = btn.parentElement.querySelectorAll("button");
    buttons.forEach(b=>b.disabled=true);
    const good = (j===q.c);
    if(good){ btn.classList.add("ok"); s.right++; }
    else { btn.classList.add("err"); buttons[q.c].classList.add("ok"); }
    s.done[i]=good;
    feedback(qid, good, q.h);
    updScore(tid);
  };

  window._chkGap = function(tid,i){
    const s = state[tid]; if(s.done[i]!==undefined) return;
    const q = topic(tid).q[i];
    const qid = tid+"-"+i;
    const inp = document.getElementById("in-"+qid);
    const val = inp.value.trim().toLowerCase().replace(/\s+/g," ");
    const good = q.a.some(a=>a.toLowerCase()===val);
    inp.classList.add(good?"ok":"err");
    inp.disabled = true;
    if(good){ s.right++; feedback(qid,true,q.h); }
    else { feedback(qid,false,'Richtig wäre: <b>'+q.a[0]+'</b>. '+(q.h||"")); }
    s.done[i]=good;
    updScore(tid);
  };

  document.addEventListener("keydown",function(e){
    if(e.key==="Enter" && e.target.tagName==="INPUT" && e.target.id.startsWith("in-")){
      const parts = e.target.id.slice(3).split("-");
      const i = parseInt(parts.pop(),10);
      const tid = parts.join("-");
      window._chkGap(tid,i);
    }
  });

  const order = {"A1":["a2","A2"],"A2":["b1","B1"],"B1":["b2","B2"],"B2":null};
  const nx = order[D.level];
  const el = document.getElementById("nextlvl");
  if(el) el.innerHTML = nx
    ? '<a class="cta" href="'+nx[0]+'.html">Weiter zu '+nx[1]+' →</a>'
    : '<a class="cta" href="index.html">Zurück zur Übersicht</a>';
})();
