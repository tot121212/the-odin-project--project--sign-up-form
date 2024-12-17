let password = document.querySelector("#sign-up-form #password");
let confirm_password = document.querySelector("#sign-up-form #confirm-password");

function validatePassword(){
    if (password.value !== confirm_password.value){
        confirm_password.setCustomValidity("Passwords do not match.");
    } else{
        confirm_password.setCustomValidity("");
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;