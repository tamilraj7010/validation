const Name=document.getElementById('name')
const email=document.getElementById('email')
const password=document.getElementById('password')
const form=document.getElementById('form')
const nameError=document.getElementById('name_error')
const emailError=document.getElementById('email_error')
const passError=document.getElementById('pass_error')

form.addEventListener('submit', (e)=>{
 let success=true;
        if(Name.value===""){
        e.preventDefault()
        nameError.innerHTML="enter your name"
        success=false;
    }
    else{
        nameError.innerHTML=""
    }

    var emailPattern=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!email.value.match(emailPattern)){
        e.preventDefault('submit')
        emailError.innerHTML="Enter valid email address"
        success=false;

    }
    else if(email.value==""){
        e.preventDefault('submit')

        emailError.innerHTML="enter your email address"
        success=false;

    }
    else{
        emailError.innerHTML=""
    }

    if(password.value==""){
        e.preventDefault('submit')
        passError.innerHTML="enter any password"
        success=false;

    }   
    else if(password.value.length<=5){
        e.preventDefault('submit')
        passError.innerHTML="password must contain 6 or more letters"
        success=false;

    }   
    else if(password.value.length>=20){
        e.preventDefault('submit')
        passError.innerHTML="password must contain less than 20 letters"
        success=false;
    }
    else{
        passError.innerHTML=""
    }

    
    if(success){
        alert("form submitted successfully")
        form.reset()
    }
    })