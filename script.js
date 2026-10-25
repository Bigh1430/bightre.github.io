const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰";});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰";}));}
const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();
const sections=document.querySelectorAll("main section[id]"),links=document.querySelectorAll(".nav-links a");
if("IntersectionObserver"in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${entry.target.id}`));}),{rootMargin:"-35% 0px -55% 0px"});sections.forEach(section=>observer.observe(section));}
