const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
// const login-btn =documnet.querySelector("#login-btn");
const container = document.querySelector(".container");
var user="user1234";
var pass="usedemo";
sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

document.getElementById("login-btn").addEventListener("click", myFunction);

function myFunction() {
  let inputUser = document.getElementById("myuser");
  let inputUserValue=inputUser.value;

  let inputPassword = document.getElementById("mypassword");
  let inputPasswordValue=inputPassword.value;

  if (inputUserValue==user && inputPasswordValue==pass){
      // alert("Correct password");
      window.location.href = "index.html";
  }
  else{
    alert("Enter valid user id and password");
  }
}