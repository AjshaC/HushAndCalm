const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle-menu'),
closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', ()  =>{
    navMenu.classList.toggle('Show')
})

closeMenu.addEventListener('click', ()  =>{
    navMenu.classList.remove('Show')
})



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");

  }
}

