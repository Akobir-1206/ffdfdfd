const registerForm = document.querySelector('#registerForm');
const Username = document.querySelector('#username');
const Email = document.querySelector('#email');
const Phone = document.querySelector('#phone');
const Subject = document.querySelector('#subject');
const Message = document.querySelector('#message');
const body = document.querySelector('body')
regiterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      localStorage.getItem("email") !== Email.value &&
      localStorage.getItem("username") !== Username.value
    ) {
    //   let EmailLog = localStorage.setItem("email", Email.value);
    //   let UsernameLog = localStorage.setItem("username", Username.value);
      alert("You have succesfully registred");
    } 
  });