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
const root = document.documentElement;

// color theme button (remembered between pages)
let o = +localStorage.hueOffset || 0;
root.style.setProperty('--o', o);
$('#hue-btn')?.addEventListener('click', () => { o += 40; localStorage.hueOffset = o; root.style.setProperty('--o', o); });

// active filter pill highlight
$$('.filters a').forEach((a) => a.pathname + a.search === location.pathname + location.search && a.classList.add('active'));

// fade-up reveal (staggered)
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .1 });
$$('.task, .crud-card, .empty').forEach((el, i) => { el.classList.add('reveal'); el.style.setProperty('--n', i % 5); io.observe(el); });