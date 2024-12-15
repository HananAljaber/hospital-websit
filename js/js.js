menubtn = document.querySelector("#menu-btn")
navbar = document.querySelector(".navbar")
menubtn.onclick =()=>{
    menubtn.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}

window.onscroll =()=>{
    menubtn.classList.remove("fa-times")
    navbar.classList.remove("active")
}