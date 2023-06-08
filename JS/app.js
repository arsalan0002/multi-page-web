// Header scroll //


let nav = document.querySelector(".navbar");
window.onscroll = () => {
    if(document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled")
    }
    else {
        nav.classList.remove("header-scrolled") 
    }
}

// Hide navbar //

let navBar = document.querySelectorAll(".nav-link");
let navBarCollapse = document.querySelector(".navbar-collapse .collapse");
navBar.forEach((element) => {
    element.addEventListener("click", () => {
        navBarCollapse.classList.remove("show")
    })
    
});