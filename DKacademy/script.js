const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const email= document.getElementById('email').value;
const password= document.getElementById('password');
const form= document.getElementById('form');
const errorElement= document.getElementById('error');
form.addEventListener('submit',(e)=>{
    let msgs=[]
    if(email===null){
        msgs.push('e-mail is required')
    }
    if (password.value.length<=6){
        msgs.push('password must be at least 6 characters long')
    }
    if (password.value.length>20){
        msgs.push('password length cannot exceed 20 characters')
    }
    if (password==='password'){
        msgs.push('please choose a different password')
    }
    if(msgs.length>0){
        e.preventDefault();
        errorElement.innerText=msgs.join(', ')
    }
});

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());