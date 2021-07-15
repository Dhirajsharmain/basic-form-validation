
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

// phone number validation

const newPhone = document.querySelector("#phone");
const phoneError = document.querySelector('.phone-error');
newPhone.addEventListener('input', function(){
    let phoneRegex = RegExp('^[9][1]+\\s\\d{10}$');
    if(newPhone.value.length == 0 ){
        phoneError.textContent = "Phone Number is incorrect";
    }else{
        if (phoneRegex.test(newPhone.value)){
            phoneError.textContent = "";
        }
        else {
            phoneError.textContent = "Phone Number is incorrect";
        }
    }
});

// Password validation

const password = document.querySelector("#pwd");
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function(){
    let passwordRegex = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$');
    if(password.value.length == 0 ){
        passwordError.textContent = "Password is incorrect";
    }else{
        if (passwordRegex.test(password.value)){
            passwordError.textContent = "";
        }
        else {
            passwordError.textContent = "Password is incorrect";
        }
    }
});