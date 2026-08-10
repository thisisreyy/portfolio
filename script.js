/* =====================================================================
   REYFLIX · interactions
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- Hero terminal "coding trailer" ---------- */
  initTerminal();
  function initTerminal() {
    const term = document.getElementById('term');
    if (!term) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const t = (text, c) => ({ t: text, c: c || 'c-var' });
    // Lightweight tokenizer for the code lines
    const code = (str) => {
      const re = /("(?:[^"\\]|\\.)*")|\b(const|let|return|new|type|interface|true|false|async|await|export)\b|(\/\/[^\n]*)|([{}\[\]():;,.=>])|(\d+\.?\d*)/g;
      const out = []; let last = 0, m;
      while ((m = re.exec(str))) {
        if (m.index > last) out.push(t(str.slice(last, m.index), 'c-var'));
        const cls = m[1] ? 'c-str' : m[2] ? (m[2] === 'true' || m[2] === 'false' ? 'c-bool' : 'c-key')
          : m[3] ? 'c-out' : m[4] ? 'c-punct' : 'c-num';
        out.push(t(m[0], cls));
        last = re.lastIndex;
      }
      if (last < str.length) out.push(t(str.slice(last), 'c-var'));
      return out;
    };

    const lines = [
      [t('$ ', 'c-prompt'), t('whoami', 'c-cmd')],
      [t('aatreyee chatterjee · software engineer @ manchester', 'c-out')],
      [t('$ ', 'c-prompt'), t('cat ', 'c-cmd'), t('rey.ts', 'c-arg')],
      code('const rey: Engineer = {'),
      code('  edu: "BSc CS · Manchester · First Class",'),
      code('  stack: ["React", "TypeScript", "Python"],'),
      code('  focus: ["systems", "testing", "reliability"],'),
      code('  shipping: true,'),
      code('};'),
      [t('$ ', 'c-prompt'), t('git ', 'c-cmd'), t('commit -m ', 'c-arg'), t('"interfaces that feel effortless"', 'c-str')],
      [t('[main 9f2c1a] ', 'c-out'), t('interfaces that feel effortless', 'c-out')],
      [t('$ ', 'c-prompt'), t('npm run ', 'c-cmd'), t('deploy --prod', 'c-arg')],
      [t('✓ ', 'c-ok'), t('compiled successfully in 1.24s', 'c-out')],
      [t('🚀 ', 'c-ok'), t("live · let's build something together", 'c-ok')],
    ];

    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const fullLine = (toks) => toks.map((k) => `<span class="${k.c}">${esc(k.t)}</span>`).join('');
    const partialLine = (toks, n) => {
      let html = '', used = 0;
      for (const k of toks) {
        if (used >= n) break;
        const take = Math.min(k.t.length, n - used);
        html += `<span class="${k.c}">${esc(k.t.slice(0, take))}</span>`;
        used += take;
      }
      return html;
    };
    const lineLen = (toks) => toks.reduce((a, k) => a + k.t.length, 0);

    if (reduce) {
      term.innerHTML = lines.map(fullLine).join('\n') + '<span class="cur">▋</span>';
      return;
    }

    let li = 0, ci = 0;
    const done = [];
    const draw = () => {
      let html = done.join('\n');
      if (li < lines.length) html += (done.length ? '\n' : '') + partialLine(lines[li], ci);
      term.innerHTML = html + '<span class="cur">▋</span>';
    };
    const step = () => {
      if (li >= lines.length) { setTimeout(reset, 2600); return; }
      const len = lineLen(lines[li]);
      if (ci < len) { ci++; draw(); setTimeout(step, 18 + Math.random() * 34); }
      else { done.push(fullLine(lines[li])); li++; ci = 0; draw(); setTimeout(step, 420); }
    };
    const reset = () => { li = 0; ci = 0; done.length = 0; draw(); setTimeout(step, 500); };
    draw();
    setTimeout(step, 700);
  }

  /* ---------- Profile gate ---------- */
  const gate = document.getElementById('gate');
  if (gate) {
    document.body.classList.add('locked');
    gate.querySelectorAll('.profile').forEach((btn) => {
      btn.addEventListener('click', () => {
        gate.classList.add('hidden');
        document.body.classList.remove('locked');
        setTimeout(() => { gate.style.display = 'none'; }, 700);
      });
    });
  }

  /* ---------- Navbar: solid on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => { if (nav) nav.classList.toggle('scrolled', window.scrollY > 40); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Smooth scroll for internal links ---------- */
  document.querySelectorAll('a[data-scroll]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const target = id && id.length > 1 && document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    });
  });

  /* ---------- Active nav link ---------- */
  const navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = '#' + en.target.id;
        navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Row carousels ---------- */
  document.querySelectorAll('.row__wrap').forEach((wrap) => {
    const track = wrap.querySelector('.row__track');
    const left = wrap.querySelector('.row__arrow--l');
    const right = wrap.querySelector('.row__arrow--r');
    if (!track) return;
    const step = () => Math.max(track.clientWidth * 0.8, 300);
    if (left) left.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    if (right) right.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    // Hide an arrow when there's nothing more to scroll that way.
    const updateArrows = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      if (left) left.classList.toggle('is-hidden', track.scrollLeft <= 2);
      if (right) right.classList.toggle('is-hidden', track.scrollLeft >= max);
    };
    updateArrows();
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
  });

  /* ---------- Card click → open live link ---------- */
  document.querySelectorAll('.card[data-live]').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // let inner links work
      const url = card.getAttribute('data-live');
      if (url) window.open(url, '_blank', 'noopener');
    });
  });

  /* ---------- Top 10 technologies ---------- */
  const top10 = document.getElementById('top10');
  if (top10) {
    const list = [
      ['JavaScript', 'Frontend'], ['React', 'Frontend'], ['Python', 'Language'],
      ['Node.js', 'Backend'], ['TypeScript', 'Frontend'], ['Tailwind', 'Styling'],
      ['MongoDB', 'Database'], ['Docker', 'DevOps'], ['Git', 'Tooling'], ['AWS', 'Cloud'],
    ];
    top10.innerHTML = list.map(([name, cat], i) => `
      <div class="top10">
        <span class="top10__num">${i + 1}</span>
        <div class="top10__tile"><b>${name}</b><span>${cat}</span></div>
      </div>`).join('');
  }

  /* ---------- Reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }

  /* ---------- CV ---------- */
  const cv = document.getElementById('cv-btn');
  if (cv) cv.addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = 'public/Aatreyee_Chatterjee_Software_Engineer_CV.docx';
    a.download = 'Aatreyee_Chatterjee_Software_Engineer_CV.docx';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });

  /* ---------- Contact form ---------- */
  initContactForm();
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    if (typeof emailjs !== 'undefined') emailjs.init('gegier-Yoscu9d5Cj');

    ['fullName', 'email', 'message'].forEach((name) => {
      const input = document.getElementById(name);
      if (input) input.addEventListener('input', () => clearErr(name));
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = { fullName: val('fullName'), email: val('email'), message: val('message') };
      if (!validate(data)) return;

      const btn = document.getElementById('submit-btn');
      const text = document.getElementById('submit-text');
      const note = document.getElementById('error-message');
      if (note) note.hidden = true;
      if (btn) btn.disabled = true;
      if (text) text.textContent = 'Sending…';

      try {
        const res = await emailjs.send('service_bpwk6u9', 'template_kzvd2nd', {
          from_name: data.fullName, from_email: data.email,
          to_email: 'aatreyeechatterjeee@gmail.com', message: data.message, reply_to: data.email,
        });
        if (res.status !== 200) throw new Error('bad status');
        if (text) text.textContent = 'Message Sent';
        form.reset(); showToast();
        setTimeout(() => { if (text) text.textContent = 'Send Message'; if (btn) btn.disabled = false; }, 2500);
      } catch (err) {
        console.error('EmailJS', err);
        if (text) text.textContent = 'Try Again';
        if (note) note.hidden = false;
        if (btn) btn.disabled = false;
      }
    });

    function val(id) { const el = document.getElementById(id); return el ? el.value.trim() : ''; }
    function validate(d) {
      let ok = true;
      if (!d.fullName) { setErr('fullName', 'Please enter your name'); ok = false; }
      if (!d.email) { setErr('email', 'Please enter your email'); ok = false; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { setErr('email', 'Enter a valid email'); ok = false; }
      if (!d.message) { setErr('message', 'Add a short message'); ok = false; }
      return ok;
    }
    function setErr(name, msg) {
      const f = document.getElementById(name), err = document.getElementById(name + '-error');
      if (f) f.closest('.field').classList.add('invalid');
      if (err) err.textContent = msg;
    }
    function clearErr(name) {
      const f = document.getElementById(name), err = document.getElementById(name + '-error');
      if (f) f.closest('.field').classList.remove('invalid');
      if (err) err.textContent = '';
    }
  }

  function showToast() {
    const t = document.getElementById('toast');
    if (!t) return;
    t.hidden = false;
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => { t.hidden = true; }, 350); }, 4000);
  }
})();
