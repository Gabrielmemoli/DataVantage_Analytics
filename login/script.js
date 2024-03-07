const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) => {

    if(target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".login form");
    const usernameInput = document.querySelector("input[name='username']");
    const passwordInput = document.querySelector("input[name='password']");
    const submitButton = document.querySelector(".login__button");

    // Adiciona um listener para o evento de clique no botão de login
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado

        // Validação do nome de usuário e senha
        if (usernameInput.value.trim() === "admin" && passwordInput.value.trim() === "012345678") {
            const url = window.location.protocol + "//" + window.location.host;
            window.location.href = url + "/home/home.html"; // Redireciona para a página home.html
        } else {
            alert("Nome de usuário ou senha incorretos. Tente novamente.");
        }
    });
});

