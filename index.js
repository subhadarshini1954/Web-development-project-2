
const loginDirectionBtn = document.querySelector("#login-direction");
const registrationFormContainer = document.querySelector("#registration-form-container");
const signUpDirectionBtn = document.querySelector("#sign-up-direction");

const loginContainer = document.querySelector("#login-container");



loginDirectionBtn.addEventListener("click",function(){
    loginContainer.classList.toggle("login-container-display");
    registrationFormContainer.classList.add("registration-form-container-display");
})

signUpDirectionBtn.addEventListener("click",function(){
    loginContainer.classList.toggle("login-container-display");
    registrationFormContainer.classList.remove("registration-form-container-display");
})