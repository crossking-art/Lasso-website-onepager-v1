// Pakt de <nav> (de hele menubalk) en de hamburger-knop uit de HTML
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');

// Als je op de hamburger-knop klikt: open/sluit het mobiele menu
// (dit doet de class "open" aan/uit op de <nav>, de CSS zorgt dat het menu dan zichtbaar wordt)
toggle.addEventListener('click', () => nav.classList.toggle('open'));

// Als je op een menu-link klikt (Tour Schedule, Releases, About, Contact):
// sluit het mobiele menu automatisch weer, zodat het niet blijft openstaan
// nadat je naar die sectie bent gesprongen
nav.querySelectorAll('ul a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Maakt een "observer" aan die in de gaten houdt of een element in beeld komt
// tijdens het scrollen. Zodra dat gebeurt, voegt hij de class "visible" toe
// (de CSS zorgt dan voor het inschuif/fade-in-effect) en stopt hij met kijken
// naar dat element (unobserve), zodat het maar één keer hoeft te gebeuren
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 }); // 0.15 = pas triggeren als 15% van het element zichtbaar is

// Laat de observer hierboven letten op alle elementen met class "fade-in"
// (dat zijn de sectietitels, tekstblokken, kaartjes etc. die je bij het scrollen
// rustig ziet verschijnen)
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
