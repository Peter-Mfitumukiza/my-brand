const dashboardBars = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');
const nav = document.querySelector('nav');
const logoImg = document.querySelector('.logo');

dashboardBars.addEventListener("click", ()=>{
    nav.classList.add('show');
    logoImg.src = "../images/black-logo.png";
});

closeBtn.addEventListener("click", ()=>{
    nav.classList.remove("show");
    logoImg.src = "../images/logo.png";
})
