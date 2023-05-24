const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".section-1");
const closeMenu = document.querySelector(".close");

toggle.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});

closeMenu.addEventListener("click", ()=>{
    menu.classList.toggle("active");
})