// name validation

const text = document.querySelector("#name");
const textError = document.querySelector('.text-error');
text.addEventListener('input', function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(text.value.length == 0 ){
        textError.textContent = "Name is incorrect";
    }else{
        if (nameRegex.test(text.value)){
            textError.textContent = "";
        }
        else {
            textError.textContent = "Name is incorrect";
        }
    }
});

// email validation

const newEmail = document.querySelector("#email");
const emailError = document.querySelector('.email-error');
newEmail.addEventListener('input', function(){
    let emailRegex = RegExp('^[a-zA-z0-9.+-]+[@]+[a-zA-z0-9]+[.]+[a-zA-z0-9.]{2,}$');
    if(newEmail.value.length == 0 ){
        emailError.textContent = "Email is incorrect";
    }else{
        if (emailRegex.test(newEmail.value)){
            emailError.textContent = "";
        }
        else {
            emailError.textContent = "Email is incorrect";
        }
    }
});