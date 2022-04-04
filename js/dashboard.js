const dashboardBars = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');
const sidebar = document.querySelector('.sidebar');

dashboardBars.addEventListener("click", ()=>{
    sidebar.classList.add('show');
});

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show");
})

