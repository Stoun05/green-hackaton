(function(){
const root=document.documentElement,theme=document.getElementById('themeToggle'),menu=document.getElementById('menuToggle'),nav=document.getElementById('nav');
let mode='light';try{mode=localStorage.getItem('ecohorse-theme')==='dark'?'dark':'light'}catch{}
function apply(){root.dataset.theme=mode;theme.textContent=mode==='dark'?'☀':'◐';theme.setAttribute('aria-label',mode==='dark'?'Ýagty režime geç':'Garaňky režime geç');theme.setAttribute('aria-pressed',String(mode==='dark'))}
apply();theme.addEventListener('click',()=>{mode=mode==='dark'?'light':'dark';apply();try{localStorage.setItem('ecohorse-theme',mode)}catch{}});
function close(){document.body.classList.remove('menu-open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open))});
nav.addEventListener('click',e=>{if(e.target.closest('button'))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();
