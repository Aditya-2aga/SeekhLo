const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
// const login-btn=documnet.querySelector("#login-btn");
const container = document.querySelector(".container");
// var user=user1234
// var pass=usedemoclass1
sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

// login-btn.addEventListener('click', ()=>{
  // if()
// })