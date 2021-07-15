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

