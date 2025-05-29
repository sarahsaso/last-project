
//..........................register.......//

const RegisterForm = document.getElementById('Register') ;

RegisterForm?.addEventListener('submit',(e)=>{
     e.preventDefault()

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirm-password').value;

    

    //save User Id in local storage

const userdata ={
    firstname,
    lastname,
    username,
    email,
    password,
    confirmpassword,
}
const users = []
users.push(userdata)
localStorage.setItem('user',JSON.stringify(users))
window.location.href = 'login.html'

})



//.................login.............//

const loginForm = document.getElementById('login') ;

loginForm?.addEventListener ('submit',(e) => {
    e.preventDefault();

    const userNameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    const userdata = JSON.parse(localStorage.getItem('user')) || []
    const foundUser = userdata.find( user => user.username === userNameInput)

    if (!foundUser) {
        errorMsg.textContent = 'User not found'   
    }
     else if (foundUser.password !== passwordInput) {
        errorMsg.textContent = "Incorrect password";
    } else {
        errorMsg.textContent = ''
        alert('Logged in successfully');
    } 
    
    window.location.href = 'index.html'

// Clear local storage if needed
localStorage.clear();
});



//nav bar button
let menuList = document.getElementById('menu_list') 
let menuToggler = document.getElementById('menu_toggler') 

menuToggler.addEventListener('click', function(e) {
    e.preventDefault();
    menuList.classList.toggle('hidden'); 
 
});