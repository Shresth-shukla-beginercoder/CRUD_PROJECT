const deleteForms = document.querySelectorAll(".delete-form");

deleteForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmed) {
            event.preventDefault();
        }
    });
});
const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
const root = document.documentElement, E = ['📝', '✅', '⭐', '✨', '🚀', '💡'];

// wobbling rainbow letters
$$('.wobble').forEach((el) => el.innerHTML = [...el.textContent].map((c, i) => `<span style="--i:${i}">${c === ' ' ? '&nbsp;' : c}</span>`).join(''));

// floating emoji background + cursor glow
document.body.insertAdjacentHTML('beforeend', `<div class="particles">${Array.from({ length: 18 }, (_, i) =>
  `<i style="left:${Math.random() * 100}%;--s:${14 + Math.random() * 26}px;--d:${9 + Math.random() * 10}s;--dl:${-Math.random() * 15}s">${E[i % E.length]}</i>`).join('')}</div><div class="glow"></div>`);
addEventListener('mousemove', (e) => $('.glow').style.transform = `translate(${e.clientX}px,${e.clientY}px)`);

// color theme button (remembered between pages)
let o = +localStorage.hueOffset || 0;
root.style.setProperty('--o', o);
$('#hue-btn')?.addEventListener('click', () => { o += 70; localStorage.hueOffset = o; root.style.setProperty('--o', o); });

// active filter pill highlight
$$('.filters a').forEach((a) => a.pathname + a.search === location.pathname + location.search && a.classList.add('active'));

// scroll reveal (staggered)
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .15 });
$$('.task, .crud-card, .empty').forEach((el, i) => { el.classList.add('reveal'); el.style.setProperty('--n', i % 5); io.observe(el); });

// 3D tilt on cards
$$('.task, .crud-card').forEach((c) => {
  c.addEventListener('mousemove', (e) => { const r = c.getBoundingClientRect(); c.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 8 + 'deg'); c.style.setProperty('--rx', (.5 - (e.clientY - r.top) / r.height) * 8 + 'deg'); });
  c.addEventListener('mouseleave', () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
});

// button ripple (visual only)
document.addEventListener('click', (e) => {
  const b = e.target.closest('.btn, button, .pill, .drawer a'); if (!b) return;
  const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), s = document.createElement('span');
  s.className = 'ripple'; s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
  b.appendChild(s); setTimeout(() => s.remove(), 700);
});