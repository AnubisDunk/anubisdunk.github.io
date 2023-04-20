const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', (e)=>{
    e.currentTarget.classList.toggle("is-active");
})