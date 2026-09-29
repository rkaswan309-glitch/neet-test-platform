// Friendly owl mascot + FAQ panel — include this on every student-facing page.
(function(){
  const FAQS = [
    {
      q: "Wait, is this actually free?",
      a: "Yep — 100% free right now. No card, no hidden charges, nothing."
    },
    {
      q: "Is this really like the actual NEET exam?",
      a: "Yes. Same timer, same question palette, same marking scheme. Built to feel exactly like exam day, not a random quiz app."
    },
    {
      q: "How's this different from every other test app?",
      a: "Most apps just give you a score. We give you a map — the exact chapters you're weak in, right after every test."
    },
    {
      q: "Why would I ever pay for a plan here?",
      a: "You don't have to. Most tests stay free forever — a paid series (if it ever happens) would just be extra, not a replacement."
    },
    {
      q: "Who's even behind this?",
      a: "One person — Raman Kaswan. Built because solid NEET practice shouldn't cost a fortune."
    },
    {
      q: "Why bother with chapter-wise tests?",
      a: "Fixing one weak chapter now is way easier than fixing your whole syllabus in April."
    },
    {
      q: "Is my number and score data safe?",
      a: "Your login is just for you — no one else can see your number or your results."
    },
    {
      q: "Forgot my password. Now what?",
      a: "Message us on our Telegram channel with your registered number and we'll sort it."
    },
    {
      q: "How does the negative marking actually work?",
      a: "Same as real NEET — marks for correct, a fixed cut for wrong, zero for skipped. No surprises at the end."
    },
    {
      q: "Will new tests keep coming?",
      a: "That's the whole plan. New tests keep dropping, so check back often."
    }
  ];

  function el(tag, attrs, children){
    const e = document.createElement(tag);
    if(attrs) Object.entries(attrs).forEach(([k,v]) => {
      if(k === 'text') e.textContent = v; else e.setAttribute(k, v);
    });
    (children||[]).forEach(c => e.appendChild(c));
    return e;
  }

  const owlSVG = `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="36" rx="20" ry="22" fill="#24398B"/>
      <ellipse cx="32" cy="36" rx="15" ry="17" fill="#3B57B8"/>
      <circle cx="24" cy="30" r="8" fill="#fff"/>
      <circle cx="40" cy="30" r="8" fill="#fff"/>
      <circle cx="24" cy="30" r="3.4" fill="#101B33"/>
      <circle cx="40" cy="30" r="3.4" fill="#101B33"/>
      <path d="M29 37 L32 42 L35 37 Z" fill="#F2A63A"/>
      <path d="M14 24 L22 20 L23 27 Z" fill="#24398B"/>
      <path d="M50 24 L42 20 L41 27 Z" fill="#24398B"/>
      <path d="M20 47 Q32 53 44 47" stroke="#0F9D82" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="20" cy="47" r="2.6" fill="#0F9D82"/>
      <circle cx="44" cy="47" r="2.6" fill="#0F9D82"/>
      <circle cx="32" cy="54" r="3" fill="#0F9D82"/>
    </svg>`;

  const btn = el('button', {class:'mascot-btn', 'aria-label':'Frequently asked questions', type:'button'});
  btn.innerHTML = owlSVG;
  const bubble = el('div', {class:'mascot-bubble', text:'Got questions?'});
  document.body.appendChild(btn);
  document.body.appendChild(bubble);

  let panelOpen = false;
  let overlay = null;

  function buildPanel(){
    const head = el('div', {class:'faq-head'});
    const iconWrap = document.createElement('div');
    iconWrap.innerHTML = owlSVG;
    head.appendChild(iconWrap.firstElementChild);
    head.appendChild(el('h3', {text:'Frequently asked questions'}));
    const closeBtn = el('button', {type:'button', 'aria-label':'Close', text:'\u00d7'});
    head.appendChild(closeBtn);

    const body = el('div', {class:'faq-body'});
    FAQS.forEach((item, i) => {
      const wrap = el('div', {class:'faq-item'});
      const qBtn = el('button', {class:'faq-q', type:'button'}, [
        el('span', {text:item.q}),
        el('span', {class:'plus', text:'+'})
      ]);
      const aDiv = el('div', {class:'faq-a'}, [el('p', {text:item.a})]);
      qBtn.onclick = () => {
        const isOpen = wrap.classList.contains('open');
        body.querySelectorAll('.faq-item.open').forEach(x => x.classList.remove('open'));
        if(!isOpen) wrap.classList.add('open');
      };
      wrap.appendChild(qBtn);
      wrap.appendChild(aDiv);
      body.appendChild(wrap);
    });

    const panel = el('div', {class:'faq-panel'}, [head, body]);
    overlay = el('div', {class:'faq-overlay'}, [panel]);
    overlay.addEventListener('click', (e) => { if(e.target === overlay) closePanel(); });
    closeBtn.onclick = closePanel;
    document.body.appendChild(overlay);
  }

  function openPanel(){
    if(!overlay) buildPanel();
    panelOpen = true;
  }
  function closePanel(){
    if(overlay){ overlay.remove(); overlay = null; }
    panelOpen = false;
  }

  btn.onclick = () => { panelOpen ? closePanel() : openPanel(); };
})();
