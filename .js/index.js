let menuList = document.getElementById('menu_list') 
let menuToggler = document.getElementById ('menu_toggler') 

menuToggler.addEventListener('click', function(e) {
    e.preventDefault();
    menuList.classList.toggle('hidden'); 
 
});
 