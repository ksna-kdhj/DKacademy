const email= document.getElementById('set-email').value;
const password= document.getElementById('set-password');
const form= document.getElementById('reg-form');
const errorElement= document.getElementById('error');
form.addEventListener('submit',(e)=>{
    let msgs=[]
    if(email===null){
        msgs.push('- e-mail is required\n')
    }
    if (password.value.length<=6){
        msgs.push('- Password must be at least 6 characters long \n')
    }
    if (password.value.length>20){
        msgs.push('- Password length cannot exceed 20 characters \n')
    }
    if (!(password.value.includes('-')||password.value.includes('*')||password.value.includes('$')||password.value.includes('!')||password.value.includes('%'))){ 
        msgs.push('- Password must contain one or more of the following special characters: -,%,*,$,!\n') 
    } 
    if (password==='password'){
        msgs.push('- Please choose a different password \n')
    }
    if(msgs.length>0){
        e.preventDefault();
        errorElement.innerText=msgs.join(' ')
    }
});