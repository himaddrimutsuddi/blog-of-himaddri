const darklight = ()=>{
    let element = document.body;
    let element2 = document.getElementById('cta');
    element2.classList.toggle('darkmodea');
    element.classList.toggle('dark-mode');
    let navigationbar = document.getElementById('navbar');
    navigationbar.classList.toggle("dark-mode")
}

const login = ()=> {
    location.href = 'Sign/login.html';
}
const signup  = ()=> {
    location.href = 'Sign/sign.html';
}


